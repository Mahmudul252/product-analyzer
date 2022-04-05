import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <main>
            <section className='shoes-detail'>
                <div className="shoes-heading">
                    <h1>Wear Shoes</h1>
                    <h1 className='second-heading'>Make Foos</h1>
                    <p>Shoes are an essential part of human beings. You can not imagine your day without shoes. So it is time to study some reviews and buy a pair of fancy shoes from here</p>
                    <Link to='' style={{ fontSize: '30px', textDecoration: 'none', backgroundColor: '#0170c5', padding: '15px 20px', borderRadius: '20px', color: 'white' }}>Live Demo</Link>
                </div>
                <div className="shoes-heading-image">
                    <img src="https://i.ibb.co/1Lk5jtJ/main-image.jpg" alt="" />
                </div>
            </section>
        </main>
    );
};

export default Home;
