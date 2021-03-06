import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import css from './TitleInput.scss'

const ParentWrap = ({wrap,style, children}) => {
    if (wrap) {
        return (
            <div style={style} className={css.title_wrapper}>
                {children}
            </div>
        )
    } else {
        return (
            <Fragment>
                {children}
            </Fragment>
        )
    }
}

const TitleInput = ({title, style,width, disabled, className, children, prefix, suffix, alert, rightComponent, ...rest}) => {
    const childrenExist = Boolean(children)
    return (
        <ParentWrap style={style} wrap={childrenExist}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: !title ? 'flex-end' : 'space-between',width}}>
                <label {...rest} className={classnames(className, css.title, {
                    [css['title--disabled']]: disabled,
                    [css['title--alert']]: alert
                })}>
                    {prefix && <label className={css.prefix}>{prefix}&nbsp;</label>}
                    {title}
                    {suffix && <label className={css.suffix}>&nbsp;{suffix}</label>}
                </label>
                {rightComponent}
            </div>
            {children ? <div style={{width}}>{children}</div> : undefined}
        </ParentWrap>
    )
}

TitleInput.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    alert: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string
}

export default TitleInput
