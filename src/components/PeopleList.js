function PeopleList(props) 
{  
    const arr = props.data;   const listItems = arr.map((val, index) =>     <li key={index}>{val}</li>   );  
    
    return <ul>{listItems}</ul>;

} export default PeopleList;