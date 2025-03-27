
let votes = {
    arron: 0,
    ardie: 0,
    siya: 0,
    etzabeth:0,
};


function voteForPlayer(playerName) {
    
    votes[playerName]++;
    
    document.getElementById(`${playerName}-votes`).textContent = `${votes[playerName]} Votes`;
    
    fetch('https://your-backend-api.com/vote', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            player: playerName,
            votes: votes[playerName]
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Vote recorded:', data);
    })
    .catch(error => {
        console.error('Error recording vote:', error);
        // Optionally revert vote if server fails
        votes[playerName]--;
        document.getElementById(`${playerName}-votes`).textContent = `${votes[playerName]} Votes`;
    });
}

async function fetchInitialVotes() {
    try {
        const response = await fetch('https://your-backend-api.com/votes');
        const data = await response.json();
        
        votes = data.votes;
        
        Object.keys(votes).forEach(player => {
            document.getElementById(`${player}-votes`).textContent = `${votes[player]} Votes`;
        });
    } catch (error) {
        console.error('Error fetching initial votes:', error);
    }
}

window.onload = fetchInitialVotes;