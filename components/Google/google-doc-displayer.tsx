import { docs_v1 } from 'googleapis';
import { type } from 'os';
import { CSSProperties } from 'react';

export interface GoogleDocDisplayerProps {
    readonly document: docs_v1.Schema$Document;
}

const GoogleDocDisplayer = (props: GoogleDocDisplayerProps) => {

    const { document } = props;

    const blocks = document.body.content
        .map<BlockContent>(elt => {
            
            let blockType: BlockType = 'Paragraph';
            switch (elt.paragraph?.paragraphStyle?.namedStyleType) {
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
                }),
                blockType
            }
        })
        .filter(elt => elt.elements !== undefined);


    return <div className='w-full font-mono'>
        {blocks.map((block, i) => {

            const key = `gdp-${i}`;
            const { blockType, elements } = block;

            switch(blockType) {
                case 'Paragraph': 
                    return <ParagraphBlock elements={elements} key={key} />
                case 'Heading1':
                    return <Heading1Block elements={elements} key={key} />
                case 'Heading2':
                    return <Heading2Block elements={elements} key={key} />
                case 'Heading3':
                    return <Heading3Block elements={elements} key={key} />
                case 'Title':
                    return <TitleBlock elements={elements} key={key} />
            }

        })}
    </div>;
}

interface BlockProps {
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


const ParagraphBlock = ({ elements }: BlockProps) => <div className={`mb-2`}>

    {elements.map((elt, j) => <BlockTextElement
        key={`gdpe-${j}`} textElement={elt}
        gDocBaseSize={paragraphGDocFontSize} baseSize={paragraphBaseFontSize}
    />)}
</div>


const TitleBlock = ({ elements }: BlockProps) => <div className="text-6xl">
    {elements.map((elt, j) => <BlockTextElement
        key={`gdpe-${j}`} textElement={elt}
        gDocBaseSize={titleGDocFontSize} baseSize={titleBaseFontSize}
    />)}
</div>


const Heading1Block = ({ elements }: BlockProps) => <div className="text-4xl">
    {elements.map((elt, j) => <BlockTextElement
        key={`gdpe-${j}`} textElement={elt}
        gDocBaseSize={heading1GDocFontSize} baseSize={heading1BaseFontSize}
    />)}
</div>


const Heading2Block = ({ elements }: BlockProps) => <div className="text-2xl">
    {elements.map((elt, j) => <BlockTextElement
        key={`gdpe-${j}`} textElement={elt}
        gDocBaseSize={heading2GDocFontSize} baseSize={heading2BaseFontSize}
    />)}
</div>


const Heading3Block = ({ elements }: BlockProps) => <div className="text-xl">
    {elements.map((elt, j) => <BlockTextElement
        key={`gdpe-${j}`} textElement={elt}
        gDocBaseSize={heading3GDocFontSize} baseSize={heading3BaseFontSize}
    />)}
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

type BlockType = 'Title'|'Heading1'|'Heading2'|'Heading3'|'Paragraph'

type BlockContent = TitleContent|Heading1Content|Heading2Content|Heading3Content|ParagraphContent;

interface BlockBase<T extends BlockType> {
    readonly elements: TextElement[];
    readonly blockType: T;
}

type TitleContent = BlockBase<'Title'>;
type Heading1Content = BlockBase<'Heading1'>;
type Heading2Content = BlockBase<'Heading2'>;
type Heading3Content = BlockBase<'Heading3'>;
type ParagraphContent = BlockBase<'Paragraph'>;


interface TextElement {
    readonly content: string;
    readonly textStyle: docs_v1.Schema$TextStyle;
}

export default GoogleDocDisplayer;