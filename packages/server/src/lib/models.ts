import { google } from "@ai-sdk/google";
import {anthropic} from "@ai-sdk/anthropic"
import {openai} from "@ai-sdk/openai"
import {
  findSupportedChatModel,
  type SupportedProvider,
  type SupportedChatModel,
  type SupportedChatModelId,
} from "@rushcode/shared";

import type {LanguageModel} from "ai"

type GoogleModelId= Extract<SupportedChatModel,{provider:"google"}>['id']
type AnthropiclId= Extract<SupportedChatModel,{provider:"anthropic"}>['id']
type OpenAIId= Extract<SupportedChatModel,{provider:"openai"}>['id']

export type ResolveModel={
model:LanguageModel,
provider:SupportedProvider,
modelId:SupportedChatModelId
}


function assertUnsupportedProvider(provider:never):never{
    throw new Error(`Unsupported Provider:${provider}`)
}

function resolveAnthropicModel(modelId:AnthropiclId):ResolveModel{
    return {
        model:anthropic(modelId),
        provider:"anthropic",
        modelId
    }
}

function resolveOpenAIModel(modelId:OpenAIId):ResolveModel{
    return {
        model:openai(modelId),
        provider:"openai",
        modelId
    }
}

function resolveGoogleModel(modelId:GoogleModelId):ResolveModel{
    return {
        model:google(modelId),
        provider:"google",
        modelId
    }
}


function resolveSupportedChatModel(model:SupportedChatModel):ResolveModel{
    const provider=model.provider

    switch(provider){
    case "anthropic":
        return resolveAnthropicModel(model.id)
    case "openai":
        return resolveOpenAIModel(model.id)
    case "google":
        return resolveGoogleModel(model.id)
    default:
        return assertUnsupportedProvider(provider)
    }
}

export function isSupportedChatModel(modelId:string):modelId is SupportedChatModelId{
    return findSupportedChatModel(modelId)!=null
}

export function resolveChatModel(modelId:string):ResolveModel{
    const model=findSupportedChatModel(modelId)
    if(!model){
        throw new Error(`Unsupported Model: ${modelId}`)
    }
    return resolveSupportedChatModel(model)
    
}

