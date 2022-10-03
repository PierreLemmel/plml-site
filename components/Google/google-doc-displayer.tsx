import { docs_v1 } from 'googleapis';
import Link from 'next/link';
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

    const blocks = body.content
        .filter(elt => elt.paragraph !== undefined)
        .map<BlockContent>(elt => {

            const isTextBlock = elt.paragraph.elements.every(pe => {
                return pe.inlineObjectElement === undefined;
            })

            if (isTextBlock) {
                let blockType: BlockType = "Paragraph";
                switch (elt.paragraph.paragraphStyle?.namedStyleType) {
                    case 'TITLE':
                        blockType = 'Title';
                        break;
                    case 'HEADING_1':
                        blockType = 'Heading1';
                        break;
                    case 'HEADING_2':
                        blockType = 'Heading2';
                        break;
                    case 'HEADING_3':
                        blockType = 'Heading3';
                        break;

                }

                const elements = elt.paragraph.elements.map(pe => {

                    const {
                        content,
                        textStyle
                    } = pe.textRun;
        
                    return {
                        content,
                        textStyle
                    }

                })

                return {
                    elements,
                    blockType
                }
            }
            else {

                const imgElt = elt.paragraph.elements.find(pe => {
                    return pe.inlineObjectElement !== undefined;
                })

                const inlineObjectId = imgElt.inlineObjectElement.inlineObjectId;

                const { contentUri } = inlineObjects[inlineObjectId].inlineObjectProperties.embeddedObject.imageProperties;

                return {
                    blockType: 'Image',
                    contentUri
                }
            }

            
        });


    return <>
        <div className='w-full font-mono'>
            {blocks.map((block, i) => {

                const key = `gdp-${i}`;

                switch(block.blockType) {
                    case 'Paragraph': 
                        return <ParagraphBlock elements={block.elements} key={key} />
                    case 'Heading1':
                        return <Heading1Block elements={block.elements} key={key} />
                    case 'Heading2':
                        return <Heading2Block elements={block.elements} key={key} />
                    case 'Heading3':
                        return <Heading3Block elements={block.elements} key={key} />
                    case 'Title':
                        return <TitleBlock elements={block.elements} key={key} />
                    case 'Image':
                        return <ImageBlock contentUri={block.contentUri} onClick={() => setOverlaidUrl(block.contentUri)} key={key} />
                }

            })}
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


interface ImageBlockProps {
    readonly contentUri: string;
    readonly onClick: () => void;
}

interface TextBlockProps {
    readonly elements: TextElement[];
}


const titleBaseFontSize = 60;
const heading1BaseFontSize = 36;
const heading2BaseFontSize = 24;
const heading3BaseFontSize = 20;
const paragraphBaseFontSize = 16;


const titleGDocFontSize = 26;
const heading1GDocFontSize = 20;
const heading2GDocFontSize = 16;
const heading3GDocFontSize = 14;
const paragraphGDocFontSize = 11;


const ParagraphBlock = ({ elements }: TextBlockProps) => <div className={`mb-2`}>

    {elements?.map((elt, j) => <BlockTextElement
        key={`gdpe-${j}`} textElement={elt}
        gDocBaseSize={paragraphGDocFontSize} baseSize={paragraphBaseFontSize}
    />)}
</div>


const TitleBlock = ({ elements }: TextBlockProps) => <div className="text-6xl">
    {elements?.map((elt, j) => <BlockTextElement
        key={`gdpe-${j}`} textElement={elt}
        gDocBaseSize={titleGDocFontSize} baseSize={titleBaseFontSize}
    />)}
</div>


const Heading1Block = ({ elements }: TextBlockProps) => <div className="text-4xl">
    {elements?.map((elt, j) => <BlockTextElement
        key={`gdpe-${j}`} textElement={elt}
        gDocBaseSize={heading1GDocFontSize} baseSize={heading1BaseFontSize}
    />)}
</div>


const Heading2Block = ({ elements }: TextBlockProps) => <div className="text-2xl">
    {elements?.map((elt, j) => <BlockTextElement
        key={`gdpe-${j}`} textElement={elt}
        gDocBaseSize={heading2GDocFontSize} baseSize={heading2BaseFontSize}
    />)}
</div>


const Heading3Block = ({ elements }: TextBlockProps) => <div className="text-xl">
    {elements?.map((elt, j) => <BlockTextElement
        key={`gdpe-${j}`} textElement={elt}
        gDocBaseSize={heading3GDocFontSize} baseSize={heading3BaseFontSize}
    />)}
</div>

const ImageBlock = ({ contentUri, onClick }: ImageBlockProps) => <div className="center-child w-full h-72">
    <img className="h-full hover:cursor-pointer" src={contentUri} referrerPolicy="no-referrer" onClick={() => onClick()} />
</div>


interface BlockTextElementProps {
    readonly textElement: TextElement;
    readonly gDocBaseSize: number;
    readonly baseSize: number;
}

const BlockTextElement = (props: BlockTextElementProps) => {
    const {
        textElement: { content, textStyle },
        baseSize, gDocBaseSize
    } = props;

    const { link } = textStyle;
    
    if (link) {
        const { url } = link;

        const linkClass = "text-primary-600 hover:text-primary-800 transition-colors font-bold";

        if (url.includes('plml.fr/')) {
            const chunks = url.split("plml.fr");
            const relativeUrl = chunks[chunks.length - 1];

            return <Link href={relativeUrl}>
                <a className={linkClass}>{content}</a>
            </Link>
        }
        else {
            return <a href={url} className={linkClass} target="_blank">{content}</a>
        }
    }
    else {
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
            const fsize = baseSize + (fontSize.magnitude - gDocBaseSize);
            style.fontSize = fsize + 'px';
        }
    
        return <span style={style} className={classes.join(" ")}>{content}</span>;
    }
    
}


type BlockContent = TitleContent|Heading1Content|Heading2Content|Heading3Content|ParagraphContent|ImageContent;

type TextBlockType = 'Title'|'Heading1'|'Heading2'|'Heading3'|'Paragraph'
type BlockType = TextBlockType|'Image';

interface TextBlockBase<T extends TextBlockType> {
    readonly elements: TextElement[];
    readonly blockType: T;
}

type TitleContent = TextBlockBase<'Title'>;
type Heading1Content = TextBlockBase<'Heading1'>;
type Heading2Content = TextBlockBase<'Heading2'>;
type Heading3Content = TextBlockBase<'Heading3'>;
type ParagraphContent = TextBlockBase<'Paragraph'>;

interface ImageContent {
    readonly contentUri: string;
    readonly blockType: 'Image';
}

interface TextElement {
    readonly content: string;
    readonly textStyle: docs_v1.Schema$TextStyle;
}

export default GoogleDocDisplayer;