const vacation = ({ available }) => {

    if (available){
    return (<h1>Going on vacation</h1>)
    } 
    return(<h1>Too busy for Vacations</h1>)
}
export default vacation