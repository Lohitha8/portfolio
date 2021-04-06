import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

var data = [{ key: 1, value: 'About' },
{ key: 2, value: 'Resume' },
{ key: 3, value: 'Blog' },
{ key: 4, value: 'Contact' }
];
function Header() {
    return (
        <Box display="flex" flexDirection="row">         
            <Box flexGrow={1}><h3 className ="nav-header">Portfolio</h3></Box>
            {data.map((e) => (<Link 
                key={e.key}
                component="button"
                variant="body2"
                className="nav-link"
                onClick={() => {
                    console.info("I'm a button.");
                }}
            >
               <span>{e.value}</span>
            </Link>))}           
        </Box>
    );
}
function Body() {
    <div>
        
    </div>
}

export default Header;