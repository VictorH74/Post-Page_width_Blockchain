const postData = {
    user: "Victor Almeida",
    moment: "30 min atrás",
    title: "Mais um projeto!",
    text: <p>Esse projeto é apenas uma demo de uma seção de postagem, na qual um usuário poderá postar sobre seu dia e outros usuários poderão comentar. <strong>IMPORTANTE: Nenhum famoso conhecido citado nos comentários abaixo fizeram parte desse projeto. Seus nomes foram apenas citados para fins demostrativos.</strong> Os comentários são postados aleatoriamente. Caso atualize a página, há chances de serem outros comentários. <br/> Tenha um bom dia!! 😉</p>,
    comments: [
        [
            {
                id: 1,
                user: "Jennifer Lawence",
                moment: "1 min atrás",
                text: "Está incrivel!! 🤩🤩", 
                isArtificial: true
            },
            {
                id: 2,
                user: "Thomas Shelby",
                moment: "5 min atrás",
                text: "Interessante...", 
                isArtificial: true

            },
            {
                id: 3,
                user: "Nicolas Tesla",
                moment: "15 min atrás",
                text: "De fato é um projeto deveras interessante 🧐. Continue assim", 
                isArtificial: true
                
            },
            {
                id: 4,
                user: "Kratos",
                moment: "45 min atrás",
                text: "hmm...",
                likes: 502,
                isArtificial: true
            },
            {
                id: 5,
                user: "Noé",
                moment: "2850 a.C",
                text: "Alguém viu minha mãe a rainha Elizabeth?? ",
                likes: 700254, 
                isArtificial: true
            }
        ],
        [
            {
                id: 1,
                user: "Stephen Hawnking",
                moment: "2 min atrás",
                text: "Magnífico!", 
                isArtificial: true
                
            },
            {
                id: 2,
                user: "Microondas",
                moment: "5 min atrás",
                text: <p>HHHHHMMMMMMMMMM<br/>MMMMMMMMMMMMMMMMMM!!<br/>😳😳😳</p>,
                likes: 738, 
                isArtificial: true
            },
            {
                id: 3,
                user: "Hacker Mexicano",
                moment: "15 min atrás",
                text: "😈 Yo soy un racker mehicano con una tequila 😈",
                likes: 560763, 
                isArtificial: true
            },
            {
                id: 4,
                user: "Cristiano Ronaldo",
                moment: "18 min atrás",
                text: "FIIUuuuuUUUUUuu 😼😼😼⚽", 
                isArtificial: true
                
            },
            {
                id: 5,
                user: "Albert Einstein",
                moment: "24 min atrás",
                text: "Fascinante, meu caro!", 
                isArtificial: true
                
            },
        ],
        [
            {
                id: 1,
                user: "Will Smith",
                moment: "2 min atrás",
                text: "PASTEL..", 
                isArtificial: true
                
            },
            {
                id: 2,
                user: "Bill Gates",
                moment: "5 min atrás",
                text: "I want contratar you para my empresa 😎. Oque do you achar disso? ", 
                isArtificial: true
                
            },
            {
                id: 3,
                user: "Tobey Maguire",
                moment: "15 min atrás",
                text: "E quem disse que isso é problema meu??", 
                isArtificial: true
                
            },
            {
                id: 4,
                user: "Menino Ney",
                moment: "18 min atrás",
                text: "Muito brabo ein lek!! 😎🤙🏽", 
                isArtificial: true
                
            },
            {
                id: 5,
                user: "Angelina Jolie",
                moment: "21 min atrás",
                text: "Te amo 💗💗😘", 
                isArtificial: true
                
            }
        ],
    ]
}

export default postData;