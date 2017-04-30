export default function addUser(user) {
    return `<div class="col-md-4">
                <div class="thumbnail">
                    <img src="${user.avatar_url}" alt="${user.login}" class="img-circle" style="width: 140px; height: 140px"/>
                    <div class="caption">
                        <h3 style="text-align: center;">${user.login}</h3>
                    </div>
                    <button class="btn btn-danger">Delete</button>
                </div>
            </div>`
}

export function randNum(max) {
    return Math.round(Math.random() * max);
}