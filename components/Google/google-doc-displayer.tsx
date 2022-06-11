import { docs_v1, google } from 'googleapis';
import { CSSProperties, Fragment } from 'react';

export interface GoogleDocDisplayerProps {
    readonly document: docs_v1.Schema$Document;
}

const GoogleDocDisplayer = (props: GoogleDocDisplayerProps) => {

    const { document } = props;

    const paragraphs = document.body.content
        .map<Paragraph>(elt => {
            return {
                elements: elt.paragraph?.elements.map(pe => {

                    const {
                        content,
                        textStyle
                    } = pe.textRun;
        
                    return {
                        content,
                        textStyle
                    }
                })
            }
        })
        .filter(elt => elt.elements !== undefined);


    return <div className='w-full font-mono'>
        {paragraphs.map((paragraph, i) => <div key={`gdp-${i}`} className="mb-3">

            {paragraph.elements.map((elt, j) => {
                const {
                    content,
                    textStyle
                } = elt;
            
                const key = `gdpe-${j}`;

                const { bold, italic, underline, fontSize } = textStyle;
                const classes = [];
                const style: CSSProperties = {};

                if (bold) {
                    classes.push("font-bold");
                }

                if (italic) {
                    classes.push("italic");
                }

                if (underline) {
                    classes.push("underline");
                }

                if (fontSize) {
                    const fsize = 16 + (fontSize.magnitude - 11);
                    style.fontSize = fsize + 'px';
                }

                return <span key={key} style={style} className={classes.join(" ")}>{content}</span>
            })}
        </div>)}
    </div>;
}


interface Paragraph {
    readonly elements: ParagraphElement[];
}

interface ParagraphElement {
    readonly content: string;
    readonly textStyle: docs_v1.Schema$TextStyle;
}


interface GoogleDocParagraphProps {
    readonly paragraph: Paragraph;
}

const GoogleDocParagraph = (props: GoogleDocParagraphProps) => {
    const { paragraph } = props;
    
    return <div>
        {paragraph.elements.map((elt, i) => <GoogleDocParagraphElement key={`gdpe-${i}`} element={elt} />)}
    </div>
}

interface GoogleDocParagraphElementProps {
    readonly element: ParagraphElement;
}

const GoogleDocParagraphElement = (props: GoogleDocParagraphElementProps) => {
    
    const {
        element: { content, textStyle }
    } = props;

    return <>{content}</>
}

export default GoogleDocDisplayer;