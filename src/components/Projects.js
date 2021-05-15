import { Card, Button } from 'react-bootstrap'
import data from '../data/projects-data.json'
import githubClone from '../assets/github clone.PNG'
import circle from '../assets/circle.PNG'
import currency from '../assets/currency-converter.PNG'
import giphy from '../assets/giphy.PNG'
import invoice from '../assets/invoice.PNG'
import newspaper from '../assets/news-paper.PNG'
import resume from '../assets/resume.PNG'
import tvshows from '../assets/tv-shows.PNG'
import cosmetics from '../assets/cosmetics.PNG'

function getImage(value) {

    switch (value) {
        case 'githubClone':
            return githubClone;
        case 'tvshows':
            return tvshows;

        case 'invoice':
            return invoice;

        case 'giphy':
            return giphy;

        case 'resume':
            return resume;

        case 'newspaper':
            return newspaper;

        case 'currency':
            return currency;

        case 'circle':
            return circle;

        case 'cosmetics':
            return cosmetics;

        default:
            break;
    }
}

function Projects() {
    return (
        <div className="row justify-content-center">
            {data['projects-data'].map((e) => (
                <Card style={{ width: '24rem', 'margin-right': '30px', 'margin-left': '30px' }}>
                    <Card.Img variant="top" src={getImage(e.image)} />
                    <Card.Body>
                        <Card.Title>{e.name}</Card.Title>
                        {/* <Card.Text>
                       {e.description}</Card.Text> */}
                        <Button onClick={() => { window.open(e.repositorylink) }} variant="outline-light" size="sm">Repo Link</Button>
                        <Button onClick={() => { window.open(e.deployedlink) }} variant="outline-light" size="sm" className="ml-1">Deploy Link</Button>
                    </Card.Body>
                </Card>
            ))}

        </div>
    )
}
export default Projects;