Backbone PushState Example
==============================================================================

Backbone PushState Example.

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

