import React from 'react';

/** Scalable city artwork, with separate atmosphere, landmark and traffic layers. */
export const HubScene: React.FC<{ city: string }> = ({ city }) => {
  const id = `city-${city}`;
  const warm = city === 'delhi' || city === 'surat';
  const light = warm ? '#F85C08' : '#F85C08';
  return (
    <svg className="hub-scene" viewBox="0 0 800 460" preserveAspectRatio="xMidYMid slice" role="img" aria-label={`${city === 'chennai' ? 'Chennai' : city} illuminated city illustration`}>
      <defs>
        <linearGradient id={`${id}-sky`} x2="0" y2="1"><stop stopColor={warm ? '#272727' : '#2b2b2b'}/><stop offset=".65" stopColor={warm ? '#F85C08' : '#F85C08'}/><stop offset="1" stopColor="#F85C08"/></linearGradient>
        <linearGradient id={`${id}-stone`} x2="1" y2="1"><stop stopColor={light}/><stop offset="1" stopColor="#606060"/></linearGradient>
        <linearGradient id={`${id}-water`} x2="0" y2="1"><stop stopColor="#313131"/><stop offset="1" stopColor="#1a1a1a"/></linearGradient>
        <radialGradient id={`${id}-glow`}><stop stopColor={light} stopOpacity=".45"/><stop offset="1" stopColor={light} stopOpacity="0"/></radialGradient>
        <pattern id={`${id}-windows`} width="17" height="23" patternUnits="userSpaceOnUse"><rect x="5" y="6" width="4" height="8" rx="1" fill={light} opacity=".65"/></pattern>
      </defs>
      <rect width="800" height="460" fill={`url(#${id}-sky)`}/>
      <circle className="city-atmosphere" cx="580" cy="130" r="150" fill={`url(#${id}-glow)`}/>
      <circle cx="580" cy="104" r="27" fill="#ededed" opacity=".85"/>
      <g className="city-clouds" fill="#ffffff" opacity=".08"><ellipse cx="190" cy="105" rx="140" ry="13"/><ellipse cx="610" cy="165" rx="170" ry="10"/></g>
      {[30,100,175,255,335,420,510,595,675,740].map((x,i) => <g key={x} opacity={.35 + (i % 3) * .15}><rect x={x} y={210 - (i % 4) * 26} width={45 + i % 3 * 8} height={150} fill="#2e2e2e"/><rect x={x} y={216 - (i % 4) * 26} width="43" height="135" fill={`url(#${id}-windows)`}/></g>)}
      <g fill={`url(#${id}-stone)`} stroke="#F85C08" strokeWidth="1">
        {city === 'delhi' ? <>
          <path fillRule="evenodd" d="M310 345V178H490V345H435V260Q400 206 365 260V345Z"/>
          <path d="M295 178H505V156H295ZM322 156V140H478V156ZM340 140V122H460V140Z"/>
          <path d="M298 345H502V358H298"/><path d="M326 187V323M347 187V323M453 187V323M474 187V323" opacity=".5"/>
        </> : city === 'hyderabad' ? <>
          <path fillRule="evenodd" d="M302 345V224H498V345H436V282Q400 238 364 282V345Z"/>
          {[300,335,465,500].map(x=><g key={x}><rect x={x-10} y="154" width="20" height="192"/><path d={`M${x-17} 160h34v-12h-34Z M${x-14} 144q14-44 28 0Z`}/><path d={`M${x} 116v-25`}/><path d={`M${x-14} 207h28v8h-28Z`}/></g>)}
          <path d="M352 224Q400 169 448 224Z"/>
        </> : city === 'bangalore' ? <>
          <path d="M255 345V253H545V345ZM240 253H560V241H240Z"/>
          {[275,310,345,380,415,450,485,520].map(x=><rect key={x} x={x} y="266" width="10" height="65"/>)}
          <path d="M360 241V213H440V241ZM365 213Q400 148 435 213ZM397 181V148H403V181Z"/>
          {[280,520].map(x=><path key={x} d={`M${x-22} 241V221Q${x} 182 ${x+22} 221V241Z`}/>)}
        </> : city === 'chennai' ? <>
          <path d="M320 350H480L465 324H335ZM337 321H463L450 297H350ZM351 294H449L437 271H363ZM364 268H436L426 246H374ZM375 243H425L417 221H383ZM384 218H416L407 196H393Z"/>
          {[234,259,284,309,334].map((y,i)=><g key={y}>{Array.from({length:3+i},(_,j)=><rect key={j} x={390-i*11+j*19} y={y} width="7" height="10" rx="3" fill="#F85C08"/>)}</g>)}
          <path d="M280 350V302H317V350M483 350V302H520V350"/>
        </> : <>
          <path d="M180 332H630V342H180Z"/>
          <path d="M300 342V179H311V342M500 342V179H511V342"/>
          <path d="M190 332 305 190 420 332M390 332 505 190 620 332" fill="none" strokeWidth="3"/>
          {[230,260,285,335,360,390,435,460,485,535,560,590].map(x=><path key={x} d={`M${x} 332V${210+Math.abs(x%200-105)*.9}`} strokeWidth="1"/>)}
        </>}
      </g>
      <path d="M0 356H800V460H0Z" fill={`url(#${id}-water)`}/>
      <g stroke={light} opacity=".22">{[374,388,406,430].map((y,i)=><path key={y} d={`M${280-i*35} ${y}h${240+i*70}`} strokeWidth="3"/>)}</g>
      <path d="M0 359H800" stroke="#d4d4d4" strokeWidth="2" opacity=".5"/>
      <g className="city-traffic" stroke="#dddddd" strokeWidth="3" strokeLinecap="round"><path d="M20 352h40m100 0h22m160 0h50m160 0h32"/></g>
      {[75,210,570,720].map(x=><g key={x}><path d={`M${x} 355v-39`} stroke="#2c2c2c" strokeWidth="3"/><circle cx={x} cy="315" r="4" fill="#F85C08"/><circle className="city-atmosphere" cx={x} cy="315" r="27" fill={`url(#${id}-glow)`}/></g>)}
    </svg>
  );
};
