import react from'react';

const videos = () => {
    const urlList = [
    {
        scr:'https://www.youtube.com/watch?v=BvY7fQtRcu4',
        title:'fairouz',
    },

    {
        scr:'https://www.youtube.com/watch?v=BvY7fQtRcu4',
        title:'fairouz',
    },
    
    {
        scr:'https://www.youtube.com/watch?v=BvY7fQtRcu4',
        title:'fairouz',
    },
    {
        scr:'https://www.youtube.com/watch?v=BvY7fQtRcu4',
        title:'fairouz',
    }

]
return(
    <div className='col-md-11'>
        {urlList.map((e1,key) => (
             <div className='row-mt-1' key={key} >
                
        ))}
    </div>
)
}