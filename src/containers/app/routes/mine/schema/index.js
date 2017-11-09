// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {Heading, Page} from 'openmined-ui'

import {getGeneralSchema} from '../../../../../modules/schema'

import SchemaBlock from './SchemaBlock'

import './schema.css'

type Props = {
  getGeneralSchema: () => void,
  schema: {}
}

class Schema extends Component<Props> {
  componentDidMount() {
    this.props.getGeneralSchema()
  }

  render() {
    const {schema} = this.props
    return (
      <Page id="schema" className="header-margin-bump" title="Schema" noCrawl>
        <Heading level={1}>Schema</Heading>
        {Object.keys(schema).map((block, index) => {
          return (
            <SchemaBlock
              data={schema[block]}
              index={block}
              key={`schema-block-${index}`}
            />
          )
        })}
      </Page>
    )
  }
}

const mapStateToProps = state => ({
  schema: state.schema.generalSchema
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({getGeneralSchema}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Schema)
