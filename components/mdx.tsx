import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import Image from "next/image";
import { highlight } from "sugar-high";

function PostImage(props: any) {
  return <Image alt={props.alt} className='border border-slate-200 mb-10' {...props} />
}

function Code({ children, ...props }) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function CustomLink(props) {
  let href = props.href;

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function CodePen({ title="", id }) {
  return (
    <iframe height="300" width="100%" scrolling="no" title={ title } 
      src={`https://codepen.io/zhna123/embed/${id}?default-tab=result&editable=true&theme-id=light`}
      frameBorder="no" loading="lazy" allowFullScreen={true}>

    </iframe>
  )
}

const components = { code: Code, a: CustomLink, CodePen, Image: PostImage }

export function CustomMDX(props) {
  const mdxSource = props.mdxSource;
  return (
    <MDXRemote {...mdxSource} components={ components } />
  )
}