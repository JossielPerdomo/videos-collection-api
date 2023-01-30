import app from './app';
import './database/config';

app.listen(app.get('port'), () => {
    console.log('Server running on port', app.get('port'));
    
});