import { Card, Button } from 'react-bootstrap'
import data from '../data/projects-data.json'

function Projects() {
    return (
        <div className="row justify-content-center">
         {data['projects-data'].map((e)=>(
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{e.name}</Card.Title>
                    <Card.Text>
                       {e.description}</Card.Text>
                    <Button onClick={()=>{window.open(e.repositorylink)}} variant="primary">Repo Link</Button>
                    <Button onClick={()=>{window.open(e.deployedlink)}} variant="primary" className="ml-1">Deploy Link</Button>
                </Card.Body>
            </Card>
         ))}
            
        </div>
    )
}
export default Projects;