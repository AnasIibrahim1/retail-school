import HoverWords from "@/components/HoverWords/HoverWords";

    export default function TitleDesc({title, desc}) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
<HoverWords
  text={title}
  style={{fontSize: 'calc(1.5rem + 2vw)', fontWeight: 700, color: '#2A254D'}}
/>
<HoverWords
  text={desc}
  style={{fontSize: 'calc(1rem + 0.5vw)', fontWeight: 400, color: '#77838F'}}
/>
        </div>
    )
}
