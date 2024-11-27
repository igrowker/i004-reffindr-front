import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { BreadcrumbCurrentLink, BreadcrumbLink, BreadcrumbRoot } from '@/components/ui/breadcrumb'

export const Breadcrumb = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((pathname) => pathname != '')

  return (
    <BreadcrumbRoot>
      {pathnames.map((pathname, index) => (
        <React.Fragment key={index}>
          {pathnames[pathnames.length - 1] == pathname ? (
            <BreadcrumbCurrentLink textTransform={'capitalize'}>{pathname}</BreadcrumbCurrentLink>
          ) : (
            <BreadcrumbLink asChild textTransform={'capitalize'}>
              <Link to={`/${pathname}`}>{pathname}</Link>
            </BreadcrumbLink>
          )}
        </React.Fragment>
      ))}
    </BreadcrumbRoot>
  )
}
