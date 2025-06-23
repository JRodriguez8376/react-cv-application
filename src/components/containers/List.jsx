export default function List({list, Component, setState}) {

    const listItems = list.map(item => 
        <Component 
        key={item.id}
        schools={item.school}
        setSchool={setState}
        >


            My id is {item.id}
        </Component>

    )
    return <div>{listItems}</div>
}