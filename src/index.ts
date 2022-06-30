const about = document.querySelector<HTMLElement>(".about");
const btns = document.querySelectorAll<HTMLButtonElement>(".tab-btn");
const articles = document.querySelectorAll<HTMLDivElement>(".content")

about?.addEventListener("click", (e) => {
    const target = e.target as HTMLElement
    const id: string | undefined = target?.dataset.id;
    if (id){
        // remove selected from other buttons
        btns.forEach((btn)=> {
            btn.classList.remove("active")
        });
        target?.classList.add("active")
        
        //hide other articles
        articles.forEach((article) => {
            article.classList.remove("active")
        });

        const element: HTMLElement|null = document.getElementById(id);
        element?.classList.add("active")
    }
})

export {}