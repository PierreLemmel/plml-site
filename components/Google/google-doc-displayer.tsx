import { docs_v1 } from 'googleapis';
import { CSSProperties, useState} from 'react';

import { RiCloseLine } from 'react-icons/ri';
import Icon from '../UI/Icon';

export interface GoogleDocDisplayerProps {
    readonly document: docs_v1.Schema$Document;
}

const GoogleDocDisplayer = (props: GoogleDocDisplayerProps) => {

    const [overlaidUrl, setOverlaidUrl] = useState<string|null>(null);

    const { 
        body,
        inlineObjects
    } = props.document;

    const paragraphs = body.content
        .map<Paragraph>(elt => {


            return {
                elements: elt.paragraph?.elements.map(pe => {

                    if (pe.textRun) {

                        const {
                            content,
                            textStyle
                        } = pe.textRun;
            
                        return {
                            type: "Paragraph",
                            content,
                            textStyle
                        }
                    }
                    else if (pe.inlineObjectElement) {

                        const {
                            inlineObjectId
                        } = pe.inlineObjectElement;

                        return {
                            type: "Image",
                            inlineObjectId
                        }
                    }
                    
                })
            }
        });


    return <>
        
        <div className='w-full font-mono'>
            {paragraphs.map((docElt, i) => <div key={`gdp-${i}`} className="mb-3">

                {docElt.elements?.map((elt, j) => {

                    const key = `gdpe-${j}`;

                    if (elt.type === "Paragraph") {
                        const {
                            content,
                            textStyle
                        } = elt;

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
                    }
                    else {
                        const { contentUri } = inlineObjects[elt.inlineObjectId].inlineObjectProperties.embeddedObject.imageProperties;

                        return <div key={key} className="center-child w-full h-72">
                            <img className="h-full hover:cursor-pointer" src={contentUri} referrerPolicy="no-referrer" onClick={() => setOverlaidUrl(contentUri)} />
                        </div>
                    }
                    
                })}
            </div>)}
        </div>

        {overlaidUrl && <div className="fixed top-0 left-0 w-screen h-screen bg-slate-500/30 z-20">
            <div className="full absolute top-0 left-0 center-child p-24">
                <img className='h-full' src={overlaidUrl} />
            </div>
            <div className="absolute right-0 p-6">
                <Icon icon={RiCloseLine} onClick={() => setOverlaidUrl(null)} />
            </div>
        </div>}
    </>;
}


interface Paragraph {
    readonly elements: ParagraphElement[];
}

type ParagraphElement = ParagraphTextElement|ParagraphImageElement;

interface ParagraphElementBase {
    readonly type: string;
}

interface ParagraphTextElement extends ParagraphElementBase {
    readonly type: "Paragraph";
    readonly content: string;
    readonly textStyle: docs_v1.Schema$TextStyle;
}

interface ParagraphImageElement extends ParagraphElementBase {
    readonly type: "Image";
    readonly inlineObjectId: string;
}

export default GoogleDocDisplayer;