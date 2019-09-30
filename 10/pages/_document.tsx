import * as React from 'react'
import Document, { NextDocumentContext } from 'next/document'
import DefaultLayout from '../layouts/index'


export default class extends Document {
    static async getInitialProps(ctx: NextDocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return <DefaultLayout />
    }
}