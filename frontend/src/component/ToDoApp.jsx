import React from 'react'

const ToDoApp = ({title, priority}) => {
    const getBackgroundcolor =(priority) => {
        switch(priority) {
            case 'high':
                return 'red';
                case 'medium':
                    return 'yellow';
                    case 'low':
                        return 'grey';
                        default:
                            return 'white';
    }
}
  return (
    <div>
        <li style={{
            backgroundColor: getBackgroundcolor(priority),
            padding: '10px',
            margin: '5px 0',
            listStyleType: 'none',
        borderRadius: '5px',
        color: 'white',
        fontWeight: 'bold',

        }}>{title}:    -{priority}</li>
    </div>
  )

}
export default ToDoApp;