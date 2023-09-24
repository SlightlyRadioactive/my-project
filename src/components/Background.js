function Background({ text }) {
    const images = require.context('../images', true);
    let image = images(`./${text}.jpg`);
    return (
        <div className="h-screen brightness-50 fadeIn-50" id="background" style={{ backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}></div>
    )
}

export default Background