import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import BlogCard from './BlogCard'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SingleCaseHero from '../SingleCaseStudy/SingleCaseHero';
import Filter from '../PressReleases/Filter';
import images from '../../constants/images';

const Blog = () => {
  return (
    <div>
        <Container>
            <Header/>
        </Container>
        <SingleCaseHero title={'Blog'} topic={''}/>
        <div className='press-bg'>
            <Container>
                <Filter />
                <h2 className='all-press'>All Blog Posts</h2>
                <Row>
                    <BlogCard 
                        title={'Rensource to power Nigerian SME productivity with $20 million funding'}
                        content={'In recognition of its work in proffering solutions to Nigeria’s power problem, renewable energy firm, Rensource Distribution Energy Limited has won Excellence in Climate Solutions award at the Transformational Business Award in London. '}
                        image={images.pressThree}
                    />

                    <BlogCard 
                        title={'Rensource to power Nigerian SME productivity with $20 million funding'}
                        content={'In recognition of its work in proffering solutions to Nigeria’s power problem, renewable energy firm, Rensource Distribution Energy Limited has won Excellence in Climate Solutions award at the Transformational Business Award in London. '}
                        image={images.pressThree}
                    />

    <BlogCard 
                        title={'Rensource to power Nigerian SME productivity with $20 million funding'}
                        content={'In recognition of its work in proffering solutions to Nigeria’s power problem, renewable energy firm, Rensource Distribution Energy Limited has won Excellence in Climate Solutions award at the Transformational Business Award in London. '}
                        image={images.pressThree}
                    />

                    <BlogCard 
                        title={'Rensource to power Nigerian SME productivity with $20 million funding'}
                        content={'In recognition of its work in proffering solutions to Nigeria’s power problem, renewable energy firm, Rensource Distribution Energy Limited has won Excellence in Climate Solutions award at the Transformational Business Award in London. '}
                        image={images.pressThree}
                    />

    <BlogCard 
                        title={'Rensource to power Nigerian SME productivity with $20 million funding'}
                        content={'In recognition of its work in proffering solutions to Nigeria’s power problem, renewable energy firm, Rensource Distribution Energy Limited has won Excellence in Climate Solutions award at the Transformational Business Award in London. '}
                        image={images.pressThree}
                    />

                    <BlogCard 
                        title={'Rensource to power Nigerian SME productivity with $20 million funding'}
                        content={'In recognition of its work in proffering solutions to Nigeria’s power problem, renewable energy firm, Rensource Distribution Energy Limited has won Excellence in Climate Solutions award at the Transformational Business Award in London. '}
                        image={images.pressThree}
                    />

                </Row>
            </Container>
        </div>
        <Footer />
    </div>
  )
}

export default Blog