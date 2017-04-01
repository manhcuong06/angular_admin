if [ -f "src/app/params/params_local.ts" ]
then
	> src/app/params/params_local.ts
fi
echo "export const service_api_domain: string = 'http://your_service_domain/';" >> src/app/params/params_local.ts;