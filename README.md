Backbone SPA PushState Example on S3
==============================================================================

Backbone.js SPA PushState Example on S3.

[Demo](http://backbone-pushstate-example.s3-website-ap-northeast-1.amazonaws.com/)

How to Build
------------------------------------------------------------------------------

    $ npm install
    $ bower install
    $ $(npm bin)/grunt server

Host on S3
------------------------------------------------------------------------------

1. [Create Bucket]
2. [Properties] > [Static Website Hosting] > [Enable website hosting]
3. [Index document]: index.html
4. [Edit Redirection Rules]
   
e.g.

    <RoutingRules>
        <RoutingRule>
            <Condition>
                <HttpErrorCodeReturnedEquals>404</HttpErrorCodeReturnedEquals>
            </Condition>
            <Redirect>
                <HostName>BUCKET_NAME.s3-website-ap-northeast-1.amazonaws.com</HostName>
                <ReplaceKeyPrefixWith>#</ReplaceKeyPrefixWith>
            </Redirect>
        </RoutingRule>
    </RoutingRules>

5. [Permissions]
6. [Grantee]: Everyone > [List]

