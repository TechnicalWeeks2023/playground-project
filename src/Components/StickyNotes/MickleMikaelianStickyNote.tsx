import { StickyNote } from '../StickyNote';

export const MickleMikaelianStickyNote = () => {
    return (
        <StickyNote
            author="Mickle Mikaelian"
            title="Лікування нерв"
            university='НТУ «Дніпровська політехніка»"'
            rotate={20}
            shadowColor="black"
            x={500}
            y={500}>
            {`
Наллю собі пахучу каву
і капельку добавлю коньяку.
Дістану із заначки шоколадку,
і так собі я нерви полічу.
            
Я не хочу ковбаси,
я не хочу масла.
Лиш би зірка на кремлі
до вечора згасла.`}
        </StickyNote>
    );
};
