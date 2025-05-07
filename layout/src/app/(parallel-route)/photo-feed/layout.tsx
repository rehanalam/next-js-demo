interface PhotoFeedLayoutProps {
    children: React.ReactNode;
    modal: React.ReactNode;
}

export default function PhotoFeedLayout({children, modal}: PhotoFeedLayoutProps )  {

    return <div>
        {children}
        {modal}
    </div>
}