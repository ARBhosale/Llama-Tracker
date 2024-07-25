1. If you see errors in the logs about not being able to install third party applications, make sure to add the scope prefix `snc` to `sn_appauthor.all_company_keys` in your sys_properties. Without this, the application will not install and you will see no records applied.
    - ex: `sn_appauthor.all_company_keys = abc,snc`
