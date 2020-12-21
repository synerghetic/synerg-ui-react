import React from 'react'
import PageContainerComponent from '.'
import { WithLabel, Input, Title } from '../'

export const Page = () => (
    <PageContainerComponent>
        <Title>Hello World</Title>
        <WithLabel label="Label" hasError={false}>
            <Input onChange={() => 0} />
        </WithLabel>
    </PageContainerComponent>
)

export default {
    title: 'Components/Containers/Page',
    component: PageContainerComponent,
}
