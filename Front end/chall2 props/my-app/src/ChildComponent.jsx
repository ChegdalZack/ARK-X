import React from 'react'

export default function ChildComponent(props) {
  return (
<p>Hi {props.name},

<p id='p1'className='p1' >{props.p1()}</p>
<p id='p2'className='p2' >{props.p2()}</p>
<p id='p3'className='p3' >{props.p3()}</p>
<p id='p4'className='p4' >{props.p4()}</p>
<p id='p5'className='p5' >{props.p5()}</p>
Thank you,
{props.name}
</p>  


)
}
