document.addEventListener('DOMContentLoaded', () => {
    const terminalOutput = document.getElementById('terminal-output');
    const commandInput = document.getElementById('command-input');
    let commandHistory = [];
    let historyIndex = -1;

    // Command definitions
    const commands = {
        help: {
            description: "Show available commands",
            execute: () => {
                addResponse(`
                    <p>Available commands:</p>
                    <div class="command-list">
                        ${Object.entries(commands).map(([cmd, config]) => `
                            <div class="command-item">
                                <span class="command-name">${cmd}</span>
                                <span>${config.description}</span>
                            </div>
                        `).join('')}
                    </div>
                `);
            }
        },
        clear: {
            description: "Clear the terminal",
            execute: () => {
                terminalOutput.innerHTML = '';
            }
        },
        socials: {
            description: "Show my social media links",
            execute: () => {
                addResponse(`
                    <p>My social media:</p>
                    <ul>
                        <li><span class="purple">NONE</span></li>
                    </ul>
                `);
            }
        },
        joke: {
            description: "Tell a programming joke",
            execute: () => {
                const jokes = [
                    "Why do programmers prefer dark mode? Because light attracts bugs!",
                    "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
                    "Why do Java developers wear glasses? Because they can't C#!",
                    "I would tell you a joke about UDP... but you might not get it.",
                    "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings."
                ];
                const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
                addResponse(`<p>${randomJoke}</p>`);
            }
        },
        about: {
            description: "Show information about me",
            execute: () => {
                addResponse(`
                    <p>Name: <span class="purple">Saboreq</span></p>
                    <p>Email: <span class="purple">email@saboreq.site</span></p>
                    <p>Hobbies:</p>
                    <ul>
                        <li>HTML</li>
                        <li>JS</li>
                        <li>C#</li>
                        <li>Roblox Studio</li>
                    </ul>
                `);
            }
        },
        sudo: {
            description: "Become admin (just for fun)",
            execute: () => {
                addResponse(`<p>Nice try! You don't have sudo privileges here 😉</p>`);
            }
        },
        neofetch: {
            description: "Show system information",
            execute: () => {
                addResponse(`
                    <pre class="neofetch">
      .----.       @   @   <span class="purple">Saboreq</span>
     / .--. \\     ____    -------------------
    / /    \\ \\   |OS:  |  <span class="purple">Terminal Portfolio v1.0</span>
    | |    | |   |Host:|  <span class="purple">Interactive Bio</span>
    \\ \\__/ /    |Shell:| <span class="purple">JavaScript Powered</span>
     '.__.'     |WM:   | <span class="purple">HTML/CSS Framework</span>
                    </pre>
                `);
            }
        },
        theme: {
            description: "Change terminal colors",
            execute: () => {
                const themes = [
                    { name: "default", color: "#bb86fc" },
                    { name: "matrix", color: "#00ff41" },
                    { name: "cyberpunk", color: "#ff2a6d" },
                    { name: "ocean", color: "#00ffff" }
                ];
                
                addResponse(`
                    <p>Available themes:</p>
                    <div class="command-list">
                        ${themes.map(theme => `
                            <div class="command-item">
                                <span class="command-name">${theme.name}</span>
                                <span style="color: ${theme.color}">■ ${theme.color}</span>
                            </div>
                        `).join('')}
                    </div>
                    <p>Try: <span class="purple">theme [name]</span> to change</p>
                `);
            },
            subcommands: (args) => {
                if (args.length === 0) return;
                
                const themeName = args[0].toLowerCase();
                let color;
                
                switch(themeName) {
                    case "matrix":
                        color = "#00ff41";
                        break;
                    case "cyberpunk":
                        color = "#ff2a6d";
                        break;
                    case "ocean":
                        color = "#00ffff";
                        break;
                    default:
                        color = "#bb86fc"; // default purple
                }
                
                document.documentElement.style.setProperty('--purple', color);
                addResponse(`<p>Theme changed to <span style="color: ${color}">${themeName}</span></p>`);
            }
        }
    };

    // Handle command input
    commandInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const commandText = commandInput.value.trim();
            if (commandText) {
                processCommand(commandText);
                commandHistory.push(commandText);
                historyIndex = commandHistory.length;
                commandInput.value = '';
            }
        } else if (e.key === 'ArrowUp') {
            if (commandHistory.length > 0) {
                if (historyIndex > 0) historyIndex--;
                commandInput.value = commandHistory[historyIndex] || '';
            }
        } else if (e.key === 'ArrowDown') {
            if (commandHistory.length > 0) {
                if (historyIndex < commandHistory.length - 1) historyIndex++;
                commandInput.value = commandHistory[historyIndex] || '';
            }
        }
    });

    // Process commands
    function processCommand(input) {
        const args = input.split(' ');
        const command = args[0].toLowerCase();
        const commandArgs = args.slice(1);

        addCommand(input);

        if (commands[command]) {
            if (commandArgs.length > 0 && commands[command].subcommands) {
                commands[command].subcommands(commandArgs);
            } else {
                commands[command].execute();
            }
        } else {
            addResponse(`<p>Command not found: <span class="purple">${command}</span>. Type <span class="purple">help</span> for available commands.</p>`);
        }
    }

    // Add command to terminal
    function addCommand(command) {
        const commandElement = document.createElement('div');
        commandElement.className = 'output-line';
        commandElement.innerHTML = `
            <span class="prompt">></span> <span class="command">${command}</span>
        `;
        terminalOutput.appendChild(commandElement);
    }

    function hideScrollbars() {
        const body = document.querySelector('.terminal-body');
        body.style.overflow = 'hidden';
        setTimeout(() => {
            body.style.overflow = 'auto';
        }, 100);
    }

    window.addEventListener('load', hideScrollbars);
    window.addEventListener('resize', hideScrollbars);

    // Add response to terminal
    function addResponse(response) {
        const responseElement = document.createElement('div');
        responseElement.className = 'command-response';
        responseElement.innerHTML = response;
        terminalOutput.appendChild(responseElement);
        
        // Auto-scroll to bottom
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
        hideScrollbars();
    }

    // Focus input on terminal click
    document.querySelector('.terminal-body').addEventListener('click', () => {
        commandInput.focus();
    });

    // Make terminal buttons interactive
    document.querySelector('.terminal-btn.close').addEventListener('click', () => {
        addResponse(`<p>Nice try! You can't close this terminal 😄</p>`);
    });

    document.querySelector('.terminal-btn.minimize').addEventListener('click', () => {
        addResponse(`<p>Minimize? Where would it even go? 🤔</p>`);
    });

    document.querySelector('.terminal-btn.maximize').addEventListener('click', () => {
    document.querySelector('.terminal-container').classList.toggle('fullscreen');
    addResponse(`<p>Terminal toggled ${document.querySelector('.terminal-container').classList.contains('fullscreen') ? 'fullscreen' : 'normal'} mode</p>`);
    // Auto-scroll to bottom after resize
    setTimeout(() => {
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }, 100);
});
});