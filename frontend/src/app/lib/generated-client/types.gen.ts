// This file is auto-generated by @hey-api/openapi-ts

export type Chat = {
    id: string | null;
    readonly created_at?: string | null | null;
    readonly modified_at?: string | null | null;
    confidant_id: number;
    messages: Array<leaf>;
};

export type Edge = {
    id: number;
    from_node: number;
    to_node: number;
    created_at: string;
    modified_at: string;
};

export type EdgeCreate = {
    from_node: number;
    to_node: number;
};

export type EdgeUpdate = {
    from_node?: number | null;
    to_node?: number | null;
};

export type HTTPValidationError = {
    detail?: Array<ValidationError>;
};

export type MessageIn = {
    readonly created_at?: string | null | null;
    readonly modified_at?: string | null | null;
    content: string;
    /**
     * USER: user<br/>CONFIDANT: confidant<br/>SYSTEM: system
     */
    sender_type: string;
    sender: string;
    chat_id: string;
};

export type Node = {
    id: number;
    title: string;
    prompt?: string | null;
    response?: string | null;
    spec?: string | null;
    created_at: string;
    modified_at: string;
};

export type NodeCreate = {
    title: string;
    prompt?: string | null;
    response?: string | null;
    spec?: string | null;
};

export type NodeUpdate = {
    title?: string | null;
    prompt?: string | null;
    response?: string | null;
    spec?: string | null;
};

export type Project = {
    id: number;
    title: string;
    description: string | null;
    root_node_id: number | null;
    created_at: string;
    modified_at: string;
};

export type ProjectCreate = {
    title: string;
    description?: string | null;
    root_node_id?: number | null;
};

export type ProjectUpdate = {
    title?: string | null;
    description?: string | null;
    root_node_id?: number | null;
};

export type ValidationError = {
    loc: Array<(string | number)>;
    msg: string;
    type: string;
};

export type leaf = {
    id: string | null;
    readonly created_at?: string | null | null;
    readonly modified_at?: string | null | null;
    content: string;
    /**
     * USER: user<br/>CONFIDANT: confidant<br/>SYSTEM: system
     */
    sender_type: string;
    sender: string;
};

export type ReadAllNodesApiStudioPosetNodesGetResponse = Array<Node>;

export type CreateNodeApiStudioPosetNodesPostData = {
    requestBody: NodeCreate;
};

export type CreateNodeApiStudioPosetNodesPostResponse = Node;

export type ReadNodeApiStudioPosetNodesNodeIdGetData = {
    nodeId: number;
};

export type ReadNodeApiStudioPosetNodesNodeIdGetResponse = Node;

export type UpdateNodeApiStudioPosetNodesNodeIdPutData = {
    nodeId: number;
    requestBody: NodeUpdate;
};

export type UpdateNodeApiStudioPosetNodesNodeIdPutResponse = Node;

export type DeleteNodeApiStudioPosetNodesNodeIdDeleteData = {
    nodeId: number;
};

export type DeleteNodeApiStudioPosetNodesNodeIdDeleteResponse = number;

export type ReadNodeChildrenApiStudioPosetNodesNodeIdChildrenGetData = {
    nodeId: number;
};

export type ReadNodeChildrenApiStudioPosetNodesNodeIdChildrenGetResponse = Array<Node>;

export type ReadNodeParentsApiStudioPosetNodesNodeIdParentsGetData = {
    nodeId: number;
};

export type ReadNodeParentsApiStudioPosetNodesNodeIdParentsGetResponse = Array<Node>;

export type ReadAllEdgesApiStudioPosetEdgesGetResponse = Array<Edge>;

export type CreateEdgeApiStudioPosetEdgesPostData = {
    requestBody: EdgeCreate;
};

export type CreateEdgeApiStudioPosetEdgesPostResponse = Edge;

export type ReadEdgeApiStudioPosetEdgesEdgeIdGetData = {
    edgeId: number;
};

export type ReadEdgeApiStudioPosetEdgesEdgeIdGetResponse = Edge;

export type UpdateEdgeApiStudioPosetEdgesEdgeIdPutData = {
    edgeId: number;
    requestBody: EdgeUpdate;
};

export type UpdateEdgeApiStudioPosetEdgesEdgeIdPutResponse = Edge;

export type DeleteEdgeApiStudioPosetEdgesEdgeIdDeleteData = {
    edgeId: number;
};

export type DeleteEdgeApiStudioPosetEdgesEdgeIdDeleteResponse = number;

export type ReadAllProjectsApiStudioProjectsGetResponse = Array<Project>;

export type CreateProjectApiStudioProjectsPostData = {
    requestBody: ProjectCreate;
};

export type CreateProjectApiStudioProjectsPostResponse = Project;

export type ReadProjectApiStudioProjectsProjectIdGetData = {
    projectId: number;
};

export type ReadProjectApiStudioProjectsProjectIdGetResponse = Project;

export type UpdateProjectApiStudioProjectsProjectIdPutData = {
    projectId: number;
    requestBody: ProjectUpdate;
};

export type UpdateProjectApiStudioProjectsProjectIdPutResponse = Project;

export type DeleteProjectApiStudioProjectsProjectIdDeleteData = {
    projectId: number;
};

export type DeleteProjectApiStudioProjectsProjectIdDeleteResponse = number;

export type CreateChatChatCreateConfidantIdGetData = {
    confidantId: string;
};

export type CreateChatChatCreateConfidantIdGetResponse = Chat;

export type GetChatChatChatIdGetData = {
    chatId: string;
};

export type GetChatChatChatIdGetResponse = Chat;

export type SendChatPostData = {
    requestBody: MessageIn;
};

export type SendChatPostResponse = Chat;

export type $OpenApiTs = {
    '/api/studio/poset/nodes/': {
        get: {
            res: {
                /**
                 * Successful Response
                 */
                200: Array<Node>;
            };
        };
        post: {
            req: CreateNodeApiStudioPosetNodesPostData;
            res: {
                /**
                 * Successful Response
                 */
                200: Node;
                /**
                 * Validation Error
                 */
                422: HTTPValidationError;
            };
        };
    };
    '/api/studio/poset/nodes/{node_id}': {
        get: {
            req: ReadNodeApiStudioPosetNodesNodeIdGetData;
            res: {
                /**
                 * Successful Response
                 */
                200: Node;
                /**
                 * Validation Error
                 */
                422: HTTPValidationError;
            };
        };
        put: {
            req: UpdateNodeApiStudioPosetNodesNodeIdPutData;
            res: {
                /**
                 * Successful Response
                 */
                200: Node;
                /**
                 * Validation Error
                 */
                422: HTTPValidationError;
            };
        };
        delete: {
            req: DeleteNodeApiStudioPosetNodesNodeIdDeleteData;
            res: {
                /**
                 * Successful Response
                 */
                200: number;
                /**
                 * Validation Error
                 */
                422: HTTPValidationError;
            };
        };
    };
    '/api/studio/poset/nodes/{node_id}/children': {
        get: {
            req: ReadNodeChildrenApiStudioPosetNodesNodeIdChildrenGetData;
            res: {
                /**
                 * Successful Response
                 */
                200: Array<Node>;
                /**
                 * Validation Error
                 */
                422: HTTPValidationError;
            };
        };
    };
    '/api/studio/poset/nodes/{node_id}/parents': {
        get: {
            req: ReadNodeParentsApiStudioPosetNodesNodeIdParentsGetData;
            res: {
                /**
                 * Successful Response
                 */
                200: Array<Node>;
                /**
                 * Validation Error
                 */
                422: HTTPValidationError;
            };
        };
    };
    '/api/studio/poset/edges/': {
        get: {
            res: {
                /**
                 * Successful Response
                 */
                200: Array<Edge>;
            };
        };
        post: {
            req: CreateEdgeApiStudioPosetEdgesPostData;
            res: {
                /**
                 * Successful Response
                 */
                200: Edge;
                /**
                 * Validation Error
                 */
                422: HTTPValidationError;
            };
        };
    };
    '/api/studio/poset/edges/{edge_id}': {
        get: {
            req: ReadEdgeApiStudioPosetEdgesEdgeIdGetData;
            res: {
                /**
                 * Successful Response
                 */
                200: Edge;
                /**
                 * Validation Error
                 */
                422: HTTPValidationError;
            };
        };
        put: {
            req: UpdateEdgeApiStudioPosetEdgesEdgeIdPutData;
            res: {
                /**
                 * Successful Response
                 */
                200: Edge;
                /**
                 * Validation Error
                 */
                422: HTTPValidationError;
            };
        };
        delete: {
            req: DeleteEdgeApiStudioPosetEdgesEdgeIdDeleteData;
            res: {
                /**
                 * Successful Response
                 */
                200: number;
                /**
                 * Validation Error
                 */
                422: HTTPValidationError;
            };
        };
    };
    '/api/studio/projects/': {
        get: {
            res: {
                /**
                 * Successful Response
                 */
                200: Array<Project>;
            };
        };
        post: {
            req: CreateProjectApiStudioProjectsPostData;
            res: {
                /**
                 * Successful Response
                 */
                200: Project;
                /**
                 * Validation Error
                 */
                422: HTTPValidationError;
            };
        };
    };
    '/api/studio/projects/{project_id}': {
        get: {
            req: ReadProjectApiStudioProjectsProjectIdGetData;
            res: {
                /**
                 * Successful Response
                 */
                200: Project;
                /**
                 * Validation Error
                 */
                422: HTTPValidationError;
            };
        };
        put: {
            req: UpdateProjectApiStudioProjectsProjectIdPutData;
            res: {
                /**
                 * Successful Response
                 */
                200: Project;
                /**
                 * Validation Error
                 */
                422: HTTPValidationError;
            };
        };
        delete: {
            req: DeleteProjectApiStudioProjectsProjectIdDeleteData;
            res: {
                /**
                 * Successful Response
                 */
                200: number;
                /**
                 * Validation Error
                 */
                422: HTTPValidationError;
            };
        };
    };
    '/chat/create/{confidant_id}': {
        get: {
            req: CreateChatChatCreateConfidantIdGetData;
            res: {
                /**
                 * Successful Response
                 */
                200: Chat;
                /**
                 * Validation Error
                 */
                422: HTTPValidationError;
            };
        };
    };
    '/chat/{chat_id}': {
        get: {
            req: GetChatChatChatIdGetData;
            res: {
                /**
                 * Successful Response
                 */
                200: Chat;
                /**
                 * Validation Error
                 */
                422: HTTPValidationError;
            };
        };
    };
    '/chat/': {
        post: {
            req: SendChatPostData;
            res: {
                /**
                 * Successful Response
                 */
                200: Chat;
                /**
                 * Validation Error
                 */
                422: HTTPValidationError;
            };
        };
    };
};