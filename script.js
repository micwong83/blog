fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const articleList = document.getElementById('article-list');
        
        data.forEach(article => {
            const card = document.createElement('div');
            card.classList.add('card');

            const img = document.createElement('img');
            img.src = article.image;
            img.alt = article.title;

            const title = document.createElement('h2');
            title.textContent = article.title;

            const description = document.createElement('p');
            description.textContent = article.description;

            card.appendChild(img);
            card.appendChild(title);
            card.appendChild(description);

            articleList.appendChild(card);
        });
    });
