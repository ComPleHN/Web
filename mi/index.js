const search = document.querySelector('.search input');
const ul = document.querySelector('.search ul');
search.addEventListener('focus',function() {
    ul.style.display = 'block'
})
search.addEventListener('blur',function() {
    ul.style.display = 'none'
})

const Data = [
    
    {url: 'images/banner小米酥妻.webp'},
    {url: 'images/轮播图/轮播图02.webp'},
    {url: 'images/轮播图/轮播图03.webp'},
    {url: 'images/轮播图/轮播图04.webp'},
    {url: 'images/轮播图/轮播图05.webp'},
    {url: 'images/轮播图/轮播图06.webp'},
]


        let i = 0

        //定时器 实现轮播效果
        let n = setInterval(function() {
            next.click();
        },3500);

        //这里是next
        let next = document.querySelector('.banner .next');
        next.addEventListener('click',function() {
            i++;

            if(i > Data.length-1) {
                i = 0;
            }
            toggle();
        })

        // 这里是往前
        let prev = document.querySelector('.banner .prev');
        prev.addEventListener('click',function() {
            i--;

            if(i < 0) {
                i = Data.length-1;
            }
            toggle();
        })

        // 这是一个复用函数,让代码看起来舒服
        function toggle() {
            const img = document.querySelector('.banner>a img');
            img.src = Data[i].url;

            const li = document.querySelector(`.banner>ul li:nth-child(${i+1})`);
            document.querySelector('.banner>ul .active').classList.remove('active');
            li.classList.add('active');
        }

        const banner = document.querySelector('.banner')
        banner.addEventListener('mouseenter',function() {
            clearInterval(n);
        })
        banner.addEventListener('mouseleave',function() {
            n = setInterval(function() {
                    next.click();
                },3500);
        })

// 效果实现: back-top 在 scrollTop卷起来 500px 时 展现
    
        const backTop = document.querySelector('.back-top');

        const elevatorList = document.querySelector('.elevator-list')


        window.addEventListener('scroll',function() {
            const Top = +document.documentElement.scrollTop;
            // console.log(Top)
            if( Top >= 798) {
                backTop.style.display = 'block';
                elevatorList.style.height = '560px'
            } else {
                backTop.style.display = 'none';
                elevatorList.style.height = '450px'
            }
        })

//实现效果: backtop click 回到顶部 
        backTop.addEventListener('click',function() {

            document.documentElement.scrollTop = 0

        })

//实现 判断什么时候 显示backTop
        const boxBanner02 = document.querySelector('.banner02')
        

        
