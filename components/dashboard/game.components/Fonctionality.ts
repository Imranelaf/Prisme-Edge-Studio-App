/* in this function we take game id as a props and we send it to the backend
to handle the request*/

export var Deleting = async (id: string) => {
    console.log('THE GAME ID IS ', id);
    
    try {
        await fetch('/api/games', {
            method: 'DELETE',
            body: JSON.stringify({ 'id':id }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
    } catch(err) {
        console.log('THIS IS FROM FUNCTIONALITY FILE', err);
    }
}