"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1018],{8359:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var o=i(5893),s=i(1151);const r={},l="Customized LLM API",t={id:"llms/customized_llm_api",title:"Customized LLM API",description:"We welcome developers to use your customized LLM API in TaskWeaver.",source:"@site/docs/llms/customized_llm_api.md",sourceDirName:"llms",slug:"/llms/customized_llm_api",permalink:"/TaskWeaver/docs/llms/customized_llm_api",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/TaskWeaver/tree/main/website/docs/llms/customized_llm_api.md",tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"GLM",permalink:"/TaskWeaver/docs/llms/glm"},next:{title:"Plugin Introduction",permalink:"/TaskWeaver/docs/plugin/plugin_intro"}},d={},c=[];function a(e){const n={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"customized-llm-api",children:"Customized LLM API"}),"\n",(0,o.jsx)(n.p,{children:"We welcome developers to use your customized LLM API in TaskWeaver.\nIn this tutorial, we will show you how to contribute your LLM API to TaskWeaver."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Create a new Python script ",(0,o.jsx)(n.code,{children:"<your_LLM_name>.py"})," in the ",(0,o.jsx)(n.code,{children:"taskweaver/llm"})," folder."]}),"\n",(0,o.jsxs)(n.li,{children:["Import the ",(0,o.jsx)(n.code,{children:"CompletionService"}),", ",(0,o.jsx)(n.code,{children:"LLMServiceConfig"})," and ",(0,o.jsx)(n.code,{children:"EmbeddingService"})," from ",(0,o.jsx)(n.code,{children:"taskweaver.llm.base"})," and other necessary libraries."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from injector import inject\nfrom taskweaver.llm.base import CompletionService, EmbeddingService, LLMServiceConfig\nfrom taskweaver.llm.util import ChatMessageType\n...\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["Create a new class ",(0,o.jsx)(n.code,{children:"YourLLMServiceConfig"})," that inherits from ",(0,o.jsx)(n.code,{children:"LLMServiceConfig"})," and implements the ",(0,o.jsx)(n.code,{children:"_configure"})," method.\nIn this method, you can set the name, API key, model name, backup model name, and embedding model name of your LLM."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'class YourLLMServiceConfig(LLMServiceConfig):\n    def _configure(self) -> None:\n        self._set_name("your_llm_name")\n\n        shared_api_key = self.llm_module_config.api_key\n        self.api_key = self._get_str(\n            "api_key",\n            shared_api_key,\n        )\n\n        shared_model = self.llm_module_config.model\n        self.model = self._get_str(\n            "model",\n            shared_model if shared_model is not None else "your_llm_model_name",\n        )\n\n        shared_backup_model = self.llm_module_config.backup_model\n        self.backup_model = self._get_str(\n            "backup_model",\n            shared_backup_model if shared_backup_model is not None else self.model,\n        )\n\n        shared_embedding_model = self.llm_module_config.embedding_model\n        self.embedding_model = self._get_str(\n            "embedding_model",\n            shared_embedding_model if shared_embedding_model is not None else self.model,\n        )\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsxs)(n.li,{children:["Create a new class ",(0,o.jsx)(n.code,{children:"YourLLMService"})," that inherits from ",(0,o.jsx)(n.code,{children:"CompletionService"})," and ",(0,o.jsx)(n.code,{children:"EmbeddingService"})," and implements the ",(0,o.jsx)(n.code,{children:"chat_completion"})," and ",(0,o.jsx)(n.code,{children:"get_embeddings"})," methods."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class YourLLMService(CompletionService, EmbeddingService):\n    @inject\n    def __init__(self, config: YourLLMServiceConfig):\n        self.config = config\n        pass\n\n    def chat_completion(\n        self,\n        messages: List[ChatMessageType],\n        use_backup_engine: bool = False,\n        stream: bool = True,\n        temperature: Optional[float] = None,\n        max_tokens: Optional[int] = None,\n        top_p: Optional[float] = None,\n        stop: Optional[List[str]] = None,\n        **kwargs: Any,\n    ) -> Generator[ChatMessageType, None, None]:\n        pass\n    \n    def get_embeddings(self, strings: List[str]) -> List[List[float]]:\n        pass\n"})}),"\n",(0,o.jsx)(n.p,{children:"Note:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["We set stream mode by default in ",(0,o.jsx)(n.code,{children:"chat_completion"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["You need to use ",(0,o.jsx)(n.code,{children:"self.config"})," to get the configuration variables of your LLM API (e.g., api key/model name) in ",(0,o.jsx)(n.code,{children:"YourLLMService"})," class."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"get_embeddings"})," method is optional."]}),"\n",(0,o.jsxs)(n.li,{children:["If you need to import other libraries for your LLM API, please import them in ",(0,o.jsx)(n.code,{children:"__init__"})," function of ",(0,o.jsx)(n.code,{children:"YourLLMService"})," class.\nYou can refer to ",(0,o.jsx)(n.a,{href:"https://github.com/microsoft/TaskWeaver/blob/main/taskweaver/llm/qwen.py",children:"QWen dashscope library import"})," for an example."]}),"\n"]}),"\n",(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsxs)(n.li,{children:["Register your LLM service in ",(0,o.jsx)(n.code,{children:"taskweaver/llm/__init__.py"})," by adding your LLM service to the ",(0,o.jsx)(n.code,{children:"LLMApi"})," ",(0,o.jsx)(n.code,{children:"__init__"})," function ."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'......\nfrom .your_llm_name import YourLLMService # import your LLM service here\n\nclass LLMApi(object):\n    @inject\n    def __init__(self, config: LLMModuleConfig, injector: Injector) -> None:\n        self.config = config\n        self.injector = injector\n\n        if self.config.api_type in ["openai", "azure", "azure_ad"]:\n            self._set_completion_service(OpenAIService)\n            \n        ......\n        \n        elif self.config.api_type == "your_llm_name":\n            self._set_completion_service(YourLLMService) # register your LLM service here\n        else:\n            raise ValueError(f"API type {self.config.api_type} is not supported")\n\n        if self.config.embedding_api_type in ["openai", "azure", "azure_ad"]:\n            self._set_embedding_service(OpenAIService)\n            \n        ......\n        \n        elif self.config.embedding_api_type == "azure_ml":\n            self.embedding_service = PlaceholderEmbeddingService(\n                "Azure ML does not support embeddings yet. Please configure a different embedding API.",\n            )\n        # register your embedding service here, if do not have embedding service, please use `PlaceholderEmbeddingService` referring to the above line\n        elif self.config.embedding_api_type == "your_llm_name": \n            self._set_embedding_service(YourLLMService)\n        else:\n            raise ValueError(\n                f"Embedding API type {self.config.embedding_api_type} is not supported",\n            )\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsxs)(n.li,{children:["Configurate ",(0,o.jsx)(n.code,{children:"taskweaver_config.json"})," file in the ",(0,o.jsx)(n.code,{children:"project"})," dir based on your implemented LLM API."]}),"\n",(0,o.jsx)(n.li,{children:"Run the following command to test your LLM API. If the LLM API is successfully set up, you will see the response from your LLM API."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd ./scripts\npython llm_api_test.py\n"})}),"\n",(0,o.jsx)(n.p,{children:"You also can specify the project dir and query to be sent to your LLM API by using the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'python llm_api_test.py --project <your_project_path> --query "hello, what can you do?" \n'})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>l});var o=i(7294);const s={},r=o.createContext(s);function l(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);