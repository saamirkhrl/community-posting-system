// Variables
let user_input = document.getElementById('user-input');
let post_button = document.getElementById('post-btn');
let text = "";
let warning_text = ""

// Function for when the user clicks post
function post() {
    // Date and time info
    const new_date = new Date();
    const week_day = new_date.getDay();
    const days_of_week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const posted_day = days_of_week[week_day];
    posted_date_time = `${posted_day}, ${new_date.toLocaleDateString()} | ${new_date.toLocaleTimeString()}`;

    // Create the new elements and upload them to the DOM
    text = user_input.value;
    const new_div = document.createElement('div'); // Create a new div element
    const new_post = new_div.appendChild(document.createElement('h3'));
    const new_post_date = new_div.appendChild(document.createElement('h5'));
    new_post_date.appendChild(document.createElement('hr'))
    const post_date = document.createTextNode(posted_date_time);
    const post_text = document.createTextNode(text); // The text in the post

    new_post_date.appendChild(post_date);
    new_post.appendChild(post_text); // Add text to the new h3

    const posts_div = document.getElementById('posts');
    posts_div.appendChild(new_post_date);
    posts_div.appendChild(new_post);

    user_input.value = ""
    document.getElementById('total-characters').innerHTML = 'Total characters: 0/250'
}

// Check if the post is ready to post
post_button.addEventListener('click', function() {
    if (user_input.value !== "") {
        post();
    } else {
        warning_text = 'Your post must include text or an image before posting!'
        document.getElementById('text-warning').style.display = 'block'
        document.getElementById('warnings').innerHTML = warning_text
        setTimeout(() => {
            document.getElementById('text-warning').style.display = 'none'
            warning_text = ''
        }, 3000);
    }
});


// live count of characters
user_input.addEventListener('input', function() {
    let count = (user_input.value).length
    document.getElementById('total-characters').innerHTML = `Total characters: ${count} / 250`

    if (count > 250) {
            post_button.disabled = true
            document.getElementById('total-characters').style.color = 'Red'
            warning_text = 'You post must be less than or equal to 250 characters. Consider dialing it down.'
            document.getElementById('text-warning').style.display = 'block'
            document.getElementById('warnings').innerHTML = warning_text
            setTimeout(() => {
                document.getElementById('text-warning').style.display = 'none'
                warning_text = ''
            }, 5000);
    } else {
        document.getElementById('total-characters').style.color = 'White'
    }
})