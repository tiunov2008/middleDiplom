const reviews = () => {
    const reviewsContainer = document.querySelector('.reviews-container');
    const loadMessageElement = document.createElement('div');
    loadMessageElement.id = 'floatingCirclesG';
    loadMessageElement.innerHTML = `
    <div id="">
        <div class="f_circleG" id="frotateG_01"></div>
        <div class="f_circleG" id="frotateG_02"></div>
        <div class="f_circleG" id="frotateG_03"></div>
        <div class="f_circleG" id="frotateG_04"></div>
        <div class="f_circleG" id="frotateG_05"></div>
        <div class="f_circleG" id="frotateG_06"></div>
        <div class="f_circleG" id="frotateG_07"></div>
        <div class="f_circleG" id="frotateG_08"></div>
    `;
    reviewsContainer.appendChild(loadMessageElement);
    const elems = [];

    fetch('./comments.json')
        .then(response => {
            loadMessageElement.remove();
            return response.json();
        })
        .then(data => {
            loadMessageElement.remove();
            data.comments.forEach(item => {
                const elem = document.createElement('div');
                elem.classList.add('row');
                elem.classList.add('comment-item');
                elem.classList.add('review-margin-bottom');
                if (item.id === 0) {
                    elem.innerHTML = `
                    <div class="col-xs-3 col-sm-2">
                        <div class="review-user">
                            <img src="images/users/${item.image ? item.image : 'avatar.jpg'}" alt="" class="img-responsive avatar">
                        </div>
                    </div>
                    <div class="col-xs-9 col-sm-9">
                        <div class="review-inner review-green review-arrow review-arrow-left">
                            <p class="text-normal">${item.author}</p>
                            <p>${item.comment}</p>
                        </div>
                    </div>
                    `;
                } else if (item.id % 2) {
                    elem.innerHTML = `
                    <div class="col-xs-9 col-sm-9">
                        <div class="review-inner review-gray review-arrow review-arrow-right">
                            <p class="text-normal">${item.author}</p>
                            <p>${item.comment}</p>
                        </div>
                    </div>
                    <div class="col-xs-3 col-sm-2">
                        <div class="review-user">
                            <img src="images/users/${item.image ? item.image : 'avatar.jpg'}" alt="" class="img-responsive avatar">
                        </div>
                    </div>
                    `;
                } else {
                    elem.innerHTML = `
                    <div class="col-xs-3 col-sm-2">
                        <div class="review-user">
                            <img src="images/users/${item.image ? item.image : 'avatar.jpg'}" alt="" class="img-responsive avatar">
                        </div>
                    </div>
                    <div class="col-xs-9 col-sm-9">
                        <div class="review-inner review-orange review-arrow review-arrow-left">
                            <p class="text-normal">${item.author}</p>
                            <p>${item.comment}</p>
                        </div>
                    </div>
                    `;
                }


                elems.push(elem);
            });
            for (let i = 0; i < 3; i++) {
                reviewsContainer.querySelector('.comments-container').append(elems[i]);
                if (i === 2) {
                    elems[i].querySelector('.review-inner').classList.add('review-orange');
                }
            }
            let i = 3;
            setInterval(() => {
                reviewsContainer.querySelectorAll('.comment-item')[0].remove();
                if (i === 6) {
                    i = 0;
                }

                reviewsContainer.querySelector('.comments-container').append(elems[i]);

                i++;
            }, 3000);
        });


};

export default reviews;
