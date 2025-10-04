document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid-container');
    const generateBtn = document.getElementById('generate-btn');
    const clearBtn = document.getElementById('clear-btn');
    const targetWordInput = document.getElementById('target-word');
    const resultsContainer = document.getElementById('results-container');
    const statusBar = document.getElementById('status-bar');

    let fullWordSet = new Set();
    const colors = ['#787c7e', '#c9b458', '#6aaa64']; // Gray, Yellow, Green
    const gridState = Array(6).fill(null).map(() => Array(5).fill(0));
    const gridCells = [];

    async function initializeApp() {
        statusBar.textContent = 'Downloading word list...';
        try {
            const response = await fetch('https://gist.githubusercontent.com/dracos/dd0668f281e685bad51479e5acaadb93/raw/6bfa15d263d6d5b63840a8e5b64e04b382fdb079/valid-wordle-words.txt');
            const text = await response.text();
            const words = text.split('\n').filter(word => word.length === 5);
            fullWordSet = new Set(words);
            statusBar.textContent = 'Ready. Draw your pattern and enter the target word.';
            generateBtn.disabled = false;
        } catch (error) {
            statusBar.textContent = 'Failed to load word list. Please refresh the page.';
            console.error('Error fetching word list:', error);
            alert('Could not load word list from the source. Please check your internet connection and try again.');
        }
        createGrid();
        generateBtn.addEventListener('click', generateWords);
        clearBtn.addEventListener('click', clearGrid);
    }

    function createGrid() {
        gridContainer.innerHTML = '';
        for (let r = 0; r < 6; r++) {
            const row = [];
            for (let c = 0; c < 5; c++) {
                const cell = document.createElement('div');
                cell.classList.add('grid-cell');
                cell.style.backgroundColor = colors[0];
                cell.addEventListener('click', () => toggleColor(r, c));
                gridContainer.appendChild(cell);
                row.push(cell);
            }
            gridCells.push(row);
        }
    }

    function toggleColor(r, c) {
        gridState[r][c] = (gridState[r][c] + 1) % 3;
        gridCells[r][c].style.backgroundColor = colors[gridState[r][c]];
    }

    function clearGrid() {
        for (let r = 0; r < 6; r++) {
            for (let c = 0; c < 5; c++) {
                gridState[r][c] = 0;
                gridCells[r][c].style.backgroundColor = colors[0];
                gridCells[r][c].textContent = '';
            }
        }
        resultsContainer.innerHTML = '';
        statusBar.textContent = 'Grid cleared. Draw a new pattern.';
    }

    function check_word(guess, target) {
        const pattern = Array(5).fill(0);
        const targetList = target.split('');

        for (let i = 0; i < 5; i++) {
            if (guess[i] === target[i]) {
                pattern[i] = 2;
                targetList[i] = null;
            }
        }

        for (let i = 0; i < 5; i++) {
            if (pattern[i] === 0 && targetList.includes(guess[i])) {
                pattern[i] = 1;
                targetList[targetList.indexOf(guess[i])] = null;
            }
        }
        return pattern;
    }

    function find_word_for_pattern(target_word, desired_pattern, word_list) {
        const shuffled_list = [...word_list].sort(() => 0.5 - Math.random());
        for (const word of shuffled_list) {
            if (word === target_word) continue;
            const pattern = check_word(word, target_word);
            if (JSON.stringify(pattern) === JSON.stringify(desired_pattern)) {
                return word;
            }
        }
        return null;
    }

    function generateWords() {
        const targetWord = targetWordInput.value.toLowerCase();

        if (targetWord.length !== 5) {
            alert("Target word must be exactly 5 letters long.");
            return;
        }

        statusBar.textContent = "Generating... This may take a moment.";
        
        const solutionWords = [];
        let possible = true;
        const searchList = Array.from(new Set([...fullWordSet, targetWord]));

        for (let r = 0; r < 6; r++) {
            const patternRow = gridState[r];

            if (patternRow.every(p => p === 2)) {
                solutionWords.push(targetWord);
                continue;
            }
            
            const foundWord = find_word_for_pattern(targetWord, patternRow, searchList);

            if (foundWord) {
                solutionWords.push(foundWord);
            } else {
                statusBar.textContent = `Failed to find a word for pattern in row ${r + 1}.`;
                alert(`Could not find a word for the pattern in row ${r + 1}. This specific pattern might be impossible.`);
                possible = false;
                break;
            }
        }

        if (possible) {
            displayResults(solutionWords);
            statusBar.textContent = "Successfully generated words!";
        }
    }

    function displayResults(words) {
        resultsContainer.innerHTML = '';
        let resultString = '';
        words.forEach((word, i) => {
            for (let c = 0; c < 5; c++) {
                gridCells[i][c].textContent = word[c].toUpperCase();
            }
            resultString += `Guess ${i + 1}: ${word.toUpperCase()}<br>`;
        });
        resultsContainer.innerHTML = resultString;
    }

    initializeApp();
});
