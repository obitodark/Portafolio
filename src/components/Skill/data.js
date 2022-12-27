const frond = [
    {
        name: 'Html',
        image: 'https://www.ujudebug.com/wp-content/uploads/2022/07/html-logo-transparent.png',
        text: ''
    },
    {
        name: 'Css',
        image: 'https://www.ujudebug.com/wp-content/uploads/2022/07/css-new-logo.jpg',
        text: 'Styles'
    },
    {
        name: 'Javascript',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
        text: 'Lenguage'
    },
    {
        name: 'React',
        image: 'https://www.secret-source.eu/wp-content/uploads/2017/11/react-native-logo.jpg',
        text: 'Liberia'
    },
    {
        name: 'Materila ui',
        image: 'https://v4.mui.com/static/logo.png',
        text: ''
    },
    {
        name: 'Bootstrap',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM4SrIjv-oOJAm6NdRRLyi3QsOd6posuuHyA&usqp=CAU',
        text: ''
    },
    {
        name: 'Git',
        image: 'https://git-scm.com/images/logos/logomark-orange@2x.png',
        text: ''
    },
    {
        name: 'Pyhon',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png',
        text: ''
    },
    {
        name: 'Node.js',
        image: 'https://ih1.redbubble.net/image.1637717834.1604/pp,840x830-pad,1000x1000,f8f8f8.u1.jpg',
        text: ''
    },
    {
        name: 'Django',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAW8AAACJCAMAAADUiEkNAAAAilBMVEUAPiv///8AJgAANiAAOiYAMhpwhXwAOSQAIwAANB0AIgDt8O8AJwSVop0AKQo7XE8ALhMrUkTf5OJgeG5pf3b09vVOal8zV0mGl5AAHgDk6Oba3t0cSTklTz9GZFjS2NWgrKe1v7tVb2UAGgC/yMSuuLScqaPK0c4ADQCxvLd0iICBk4wAFgAOQzEnxtVwAAAEdElEQVR4nO3aaXOqPBgGYMwiIBgjKFoXROvynnrO//97bzY2i63OmVbn9L4+Uchk9DY8CaGeBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT0ho/qM/xY8hk+VymaQ6cBEo4aM/0D8u7ml9qo4ifTRE4F+qzpvYvPmjP9G/DXl/L+T9vRp5T/XREXl/qTrvcH4cDo87LA2/DvMZqfL2Qq7UcTN19aK5OnNxquymfZpR2tXuZwtjOcvyoM5bEMUuBxkXZJVnozCmtrHPJRGrUZathaCNTnweE2+Wj9Z+EEt7gQqep+kID1EtfjxPehWdt0iiKJrOdeBydVzaC8lE6NYsLU6Ra7tJSdVJkB2qXhZ786sFk439+5SJR32558Pzaa/Xzrten/CicUn/APzYbNzbusDFbtE6v5fqpzrVfx+Cx37J50GzVlAXect985oapXzYbm5uAi8o2md13iRpntiSzz7ID0EvkurKe7qwt0DO3uUd6RzFZdwqb3lxLqWffpSfQB5sbP0/fNyd9yHlAflv4zKzeU8zxnNbxVVz390ihyw01ebUPwy5b05NU+IqUIIBrhE3SkPmDTry9ndS+ozyV/OzTMq8oxdVWSam/Zh5wk6La+Hbq/sBD8O5vSNUH4Nf5nCFdaFabeQ2ZF2FO5/nfY8H67diG7XzVoOVzUz7EfPsUD6r5qG5ehJlIVoMvKrhGwqKqt5vZVG4ljc/lqu/y7zHLm+amgM9fO2o3gi9pNRHW6k7tgt7bMd4ZUA9U1u78qaj5pzXnXejjzpv28XB5o3tmFJ4NlmZKLry9l3S08WnecuqO513vHg3vvH6QuVpa4FZrHXk7dLt09/pB/XE1qQdLfNe6npi5tBEP+awdXlzgBvAiyBkrGN9Yh8R19yj/et5u/lw+UqZNNEncfVgOtO92cNHf9Pn4NZy0Xm26lh/C5P3SnAyuZ63F9gZNennO7sqUXkzW/ij2cuLLVmb+NFf9Sm4BWFN520nOD2+t6Z4F8Vh+UHeroBXdN4ecXtV5eZMhj1CQ16EZca3OZqHHp20rl3J2xss3+fN/rTOFdghdEQ7U/1Y4h5g1IKCnJrX+lfydnWnlJhs6ayx71hgf7BCxfnkopkut/p50e6HmEULmVePO1GSlftVUdzO2wtSk3hi6vfGjmVfFq7bDfa/W0IR+OvZ2hOBkKza4x6bJEPi51mWr3xChD7BB4qZ+5g+GrhdESoI8+RvU5z20vXLyehtfk4p3u+8x+oXj3a67A2qS75/+f7yCmHGd1E/STIaUoT9sVe7n7eVnzd1QmkzDVfltAq3osG21ygntxC9Qy5ITAapvTFu/6GAnt0cV9yeWmxn0/INZoGNqdv5O/ucsr1jARe3FpQLvMi5h09matJ7u2e93Mp7gf/vuRMTY3rX3qmo30hMhwHivtu9kQWj+a/T5rQ/7ghq93dgoZRCSI6lNgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/IX/AaULOvyCXlMAAAAAAElFTkSuQmCC',
        text: ''
    }
];

const DataSkill = {
    frond
};
export default DataSkill;
