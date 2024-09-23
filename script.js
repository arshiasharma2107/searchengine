
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const clearHistoryButton = document.getElementById("clear-history-button");
    const historyList = document.getElementById("history-list");

    
    const loadHistory = () => {
        const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
        historyList.innerHTML = history.map(item => `<li>${item}</li>`).join('');
    };

  
    const addToHistory = (term) => {
        const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
        if (!history.includes(term)) {
            history.push(term);
            localStorage.setItem("searchHistory", JSON.stringify(history));
            loadHistory(); 
        }
    };

    
    searchButton.addEventListener("click", () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            addToHistory(searchTerm);
            searchInput.value = ""; 
        }
    });

   
    clearHistoryButton.addEventListener("click", () => {
        localStorage.removeItem("searchHistory");
        loadHistory(); 
    });

    
    loadHistory();
});
