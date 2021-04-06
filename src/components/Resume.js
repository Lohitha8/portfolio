import { Card, CardColumns } from 'react-bootstrap'


function Resume() {
    return (
        <div className='row margin-50'>

            <Card className='col-4 offset-2'>

                <Card.Body>
                    <Card.Title>Education</Card.Title>
                    <Card.Text>
                        <ul>
                            <li><h6>B.Tech(C.S.E)</h6> at Nri Institute Of science and Technology, Agiripally, With an Aggregate of 73%. 2013-2016 </li>
                            <br />
                            <li><h6>Inter</h6> at Maruthi Junior colege, Nuzvid, With an Aggregate of 85%. 2011-2012. </li><br />
                            <li><h6>SSC</h6> at St Anna's E.M.H School, Nuzvid, With an Aggregate of 87%. 2010. </li>
                        </ul>

                    </Card.Text>
                </Card.Body>

            </Card>
            <Card className='col-4'>
                <Card.Body>
                    <Card.Title>Experience (2017 - 2020)</Card.Title>
                    <Card.Text>
                        <ul>
                            <li><h6>Role - Senior Analyst</h6>
                                <p>GT: Local Geometry, Important Roads, Restrictions, POI’s</p>
                                <p>NBU: Landmarks, Mapping Manual MVM India, Alf 2W Mapping</p>

                            </li>
                            <li><h6>Responsibilities</h6>
                                <p>Enhancement of Atlas (Tool).Providing initiatives with respect to process hot keys and workflow.</p>
                                <p>Escalating the edge cases to the supervisor and following up with it.</p>
                        
                            </li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>


        </div>
    )
}
export default Resume;
