import { useState } from 'react';
import { PiQuotesFill } from 'react-icons/pi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import people from '../db';

export default function App() {
    const [index, setIndex] = useState(0);
    const { id, name, job, image, text } = people[index];
    const shortDesc = text.substring(0, 90);
    const finalDesc = shortDesc.charAt(0).toUpperCase() + shortDesc.slice(1);

    return (
        <main>
            <h1>what people say about us</h1>
            <article className='review'>
                <div className='img-container'>
                    <img className='person-img' src={image} alt={name} />
                    <span className='quote-icon'>
                        <PiQuotesFill />
                    </span>
                    <p className='person-id'>{id}</p>
                </div>
                <h4 className='author'>{name}</h4>
                <p className='job'>{job}</p>
                <p className='info'>{finalDesc}</p>
                <div className='btn-container'>
                    <IoIosArrowBack
                        className='prev-btn'
                        onClick={() => index > 0 && setIndex(index - 1)}
                    />
                    <IoIosArrowForward
                        className='next-btn'
                        onClick={() => index < 99 && setIndex(index + 1)}
                    />
                </div>
                <button
                    type='button'
                    className='btn'
                    onClick={() => {
                        const randomPerson = Math.floor(
                            Math.random() * people.length
                        );
                        setIndex(randomPerson);
                    }}
                >
                    Surprise Me
                </button>
                <p className='person-index'>{index}</p>
            </article>
        </main>
    );
}
