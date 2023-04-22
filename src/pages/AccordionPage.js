
import Accordion from '../components/Accordion'
export default function AccordionPage() {
    const items = [
        {
            id: '21dds',
            label: 'Can I use react on a project',
            content: 'You can use react on any project you want. You can use react on any project you want. You can use react on any project you want.'

        },
        {
            id: 'we34',
            label: 'Can I use Javascript on a project',
            content: 'You can use react on any project you want. You can use react on any project you want. You can use react on any project you want.'

        },

        {
            id: '43nmd',
            label: 'Can I use CSS on a project',
            content: 'You can use react on any project you want. You can use react on any project you want. You can use react on any project you want.'

        }
    ]

    return (
        <div>
            <Accordion items = {items}/>
        </div>
    )
}