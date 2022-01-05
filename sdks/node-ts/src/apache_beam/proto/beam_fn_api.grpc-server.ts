// @generated by protobuf-ts 2.1.0 with parameter server_grpc1,generate_dependencies
// @generated from protobuf file "beam_fn_api.proto" (package "org.apache.beam.model.fn_execution.v1", syntax proto3)
// tslint:disable
//
//
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
//
//
// Protocol Buffers describing the Fn API and boostrapping.
//
// TODO: Usage of plural names in lists looks awkward in Java
// e.g. getOutputsMap, addCodersBuilder
//
// TODO: gRPC / proto field names conflict with generated code
// e.g. "class" in java, "output" in python
//
//
// TODO: Consider consolidating common components in another package
// and language namespaces for re-use with Runner Api.
//
import { WorkerStatusRequest } from "./beam_fn_api";
import { WorkerStatusResponse } from "./beam_fn_api";
import { StopWorkerResponse } from "./beam_fn_api";
import { StopWorkerRequest } from "./beam_fn_api";
import { StartWorkerResponse } from "./beam_fn_api";
import { StartWorkerRequest } from "./beam_fn_api";
import { LogControl } from "./beam_fn_api";
import { LogEntry_List } from "./beam_fn_api";
import { StateResponse } from "./beam_fn_api";
import { StateRequest } from "./beam_fn_api";
import { Elements } from "./beam_fn_api";
import { ProcessBundleDescriptor } from "./beam_fn_api";
import { GetProcessBundleDescriptorRequest } from "./beam_fn_api";
import { InstructionRequest } from "./beam_fn_api";
import { InstructionResponse } from "./beam_fn_api";
import * as grpc from "@grpc/grpc-js";
// 
// Control Plane API
// 
// Progress reporting and splitting still need further vetting. Also, this may
// change with the addition of new types of instructions/responses related to
// metrics.

/**
 * An API that describes the work that a SDK harness is meant to do.
 * Stable
 *
 * @generated from protobuf service org.apache.beam.model.fn_execution.v1.BeamFnControl
 */
export interface IBeamFnControl extends grpc.UntypedServiceImplementation {
    /**
     * Instructions sent by the runner to the SDK requesting different types
     * of work.
     *
     * @generated from protobuf rpc: Control(stream org.apache.beam.model.fn_execution.v1.InstructionResponse) returns (stream org.apache.beam.model.fn_execution.v1.InstructionRequest);
     */
    control: grpc.handleBidiStreamingCall<InstructionResponse, InstructionRequest>;
    /**
     * Used to get the full process bundle descriptors for bundles one
     * is asked to process.
     *
     * @generated from protobuf rpc: GetProcessBundleDescriptor(org.apache.beam.model.fn_execution.v1.GetProcessBundleDescriptorRequest) returns (org.apache.beam.model.fn_execution.v1.ProcessBundleDescriptor);
     */
    getProcessBundleDescriptor: grpc.handleUnaryCall<GetProcessBundleDescriptorRequest, ProcessBundleDescriptor>;
}
/**
 * @grpc/grpc-js definition for the protobuf service org.apache.beam.model.fn_execution.v1.BeamFnControl.
 *
 * Usage: Implement the interface IBeamFnControl and add to a grpc server.
 *
 * ```typescript
 * const server = new grpc.Server();
 * const service: IBeamFnControl = ...
 * server.addService(beamFnControlDefinition, service);
 * ```
 */
export const beamFnControlDefinition: grpc.ServiceDefinition<IBeamFnControl> = {
    control: {
        path: "/org.apache.beam.model.fn_execution.v1.BeamFnControl/Control",
        originalName: "Control",
        requestStream: true,
        responseStream: true,
        responseDeserialize: bytes => InstructionRequest.fromBinary(bytes),
        requestDeserialize: bytes => InstructionResponse.fromBinary(bytes),
        responseSerialize: value => Buffer.from(InstructionRequest.toBinary(value)),
        requestSerialize: value => Buffer.from(InstructionResponse.toBinary(value))
    },
    getProcessBundleDescriptor: {
        path: "/org.apache.beam.model.fn_execution.v1.BeamFnControl/GetProcessBundleDescriptor",
        originalName: "GetProcessBundleDescriptor",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => ProcessBundleDescriptor.fromBinary(bytes),
        requestDeserialize: bytes => GetProcessBundleDescriptorRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(ProcessBundleDescriptor.toBinary(value)),
        requestSerialize: value => Buffer.from(GetProcessBundleDescriptorRequest.toBinary(value))
    }
};
/**
 * Stable
 *
 * @generated from protobuf service org.apache.beam.model.fn_execution.v1.BeamFnData
 */
export interface IBeamFnData extends grpc.UntypedServiceImplementation {
    /**
     * Used to send data between harnesses.
     *
     * @generated from protobuf rpc: Data(stream org.apache.beam.model.fn_execution.v1.Elements) returns (stream org.apache.beam.model.fn_execution.v1.Elements);
     */
    data: grpc.handleBidiStreamingCall<Elements, Elements>;
}
/**
 * @grpc/grpc-js definition for the protobuf service org.apache.beam.model.fn_execution.v1.BeamFnData.
 *
 * Usage: Implement the interface IBeamFnData and add to a grpc server.
 *
 * ```typescript
 * const server = new grpc.Server();
 * const service: IBeamFnData = ...
 * server.addService(beamFnDataDefinition, service);
 * ```
 */
export const beamFnDataDefinition: grpc.ServiceDefinition<IBeamFnData> = {
    data: {
        path: "/org.apache.beam.model.fn_execution.v1.BeamFnData/Data",
        originalName: "Data",
        requestStream: true,
        responseStream: true,
        responseDeserialize: bytes => Elements.fromBinary(bytes),
        requestDeserialize: bytes => Elements.fromBinary(bytes),
        responseSerialize: value => Buffer.from(Elements.toBinary(value)),
        requestSerialize: value => Buffer.from(Elements.toBinary(value))
    }
};
/**
 * @generated from protobuf service org.apache.beam.model.fn_execution.v1.BeamFnState
 */
export interface IBeamFnState extends grpc.UntypedServiceImplementation {
    /**
     * Used to get/append/clear state stored by the runner on behalf of the SDK.
     *
     * @generated from protobuf rpc: State(stream org.apache.beam.model.fn_execution.v1.StateRequest) returns (stream org.apache.beam.model.fn_execution.v1.StateResponse);
     */
    state: grpc.handleBidiStreamingCall<StateRequest, StateResponse>;
}
/**
 * @grpc/grpc-js definition for the protobuf service org.apache.beam.model.fn_execution.v1.BeamFnState.
 *
 * Usage: Implement the interface IBeamFnState and add to a grpc server.
 *
 * ```typescript
 * const server = new grpc.Server();
 * const service: IBeamFnState = ...
 * server.addService(beamFnStateDefinition, service);
 * ```
 */
export const beamFnStateDefinition: grpc.ServiceDefinition<IBeamFnState> = {
    state: {
        path: "/org.apache.beam.model.fn_execution.v1.BeamFnState/State",
        originalName: "State",
        requestStream: true,
        responseStream: true,
        responseDeserialize: bytes => StateResponse.fromBinary(bytes),
        requestDeserialize: bytes => StateRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(StateResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(StateRequest.toBinary(value))
    }
};
/**
 * Stable
 *
 * @generated from protobuf service org.apache.beam.model.fn_execution.v1.BeamFnLogging
 */
export interface IBeamFnLogging extends grpc.UntypedServiceImplementation {
    /**
     * Allows for the SDK to emit log entries which the runner can
     * associate with the active job.
     *
     * @generated from protobuf rpc: Logging(stream org.apache.beam.model.fn_execution.v1.LogEntry.List) returns (stream org.apache.beam.model.fn_execution.v1.LogControl);
     */
    logging: grpc.handleBidiStreamingCall<LogEntry_List, LogControl>;
}
/**
 * @grpc/grpc-js definition for the protobuf service org.apache.beam.model.fn_execution.v1.BeamFnLogging.
 *
 * Usage: Implement the interface IBeamFnLogging and add to a grpc server.
 *
 * ```typescript
 * const server = new grpc.Server();
 * const service: IBeamFnLogging = ...
 * server.addService(beamFnLoggingDefinition, service);
 * ```
 */
export const beamFnLoggingDefinition: grpc.ServiceDefinition<IBeamFnLogging> = {
    logging: {
        path: "/org.apache.beam.model.fn_execution.v1.BeamFnLogging/Logging",
        originalName: "Logging",
        requestStream: true,
        responseStream: true,
        responseDeserialize: bytes => LogControl.fromBinary(bytes),
        requestDeserialize: bytes => LogEntry_List.fromBinary(bytes),
        responseSerialize: value => Buffer.from(LogControl.toBinary(value)),
        requestSerialize: value => Buffer.from(LogEntry_List.toBinary(value))
    }
};
/**
 * @generated from protobuf service org.apache.beam.model.fn_execution.v1.BeamFnExternalWorkerPool
 */
export interface IBeamFnExternalWorkerPool extends grpc.UntypedServiceImplementation {
    /**
     * Start the SDK worker with the given ID.
     *
     * @generated from protobuf rpc: StartWorker(org.apache.beam.model.fn_execution.v1.StartWorkerRequest) returns (org.apache.beam.model.fn_execution.v1.StartWorkerResponse);
     */
    startWorker: grpc.handleUnaryCall<StartWorkerRequest, StartWorkerResponse>;
    /**
     * Stop the SDK worker.
     *
     * @generated from protobuf rpc: StopWorker(org.apache.beam.model.fn_execution.v1.StopWorkerRequest) returns (org.apache.beam.model.fn_execution.v1.StopWorkerResponse);
     */
    stopWorker: grpc.handleUnaryCall<StopWorkerRequest, StopWorkerResponse>;
}
/**
 * @grpc/grpc-js definition for the protobuf service org.apache.beam.model.fn_execution.v1.BeamFnExternalWorkerPool.
 *
 * Usage: Implement the interface IBeamFnExternalWorkerPool and add to a grpc server.
 *
 * ```typescript
 * const server = new grpc.Server();
 * const service: IBeamFnExternalWorkerPool = ...
 * server.addService(beamFnExternalWorkerPoolDefinition, service);
 * ```
 */
export const beamFnExternalWorkerPoolDefinition: grpc.ServiceDefinition<IBeamFnExternalWorkerPool> = {
    startWorker: {
        path: "/org.apache.beam.model.fn_execution.v1.BeamFnExternalWorkerPool/StartWorker",
        originalName: "StartWorker",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => StartWorkerResponse.fromBinary(bytes),
        requestDeserialize: bytes => StartWorkerRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(StartWorkerResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(StartWorkerRequest.toBinary(value))
    },
    stopWorker: {
        path: "/org.apache.beam.model.fn_execution.v1.BeamFnExternalWorkerPool/StopWorker",
        originalName: "StopWorker",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => StopWorkerResponse.fromBinary(bytes),
        requestDeserialize: bytes => StopWorkerRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(StopWorkerResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(StopWorkerRequest.toBinary(value))
    }
};
/**
 * API for SDKs to report debug-related statuses to runner during pipeline execution.
 *
 * @generated from protobuf service org.apache.beam.model.fn_execution.v1.BeamFnWorkerStatus
 */
export interface IBeamFnWorkerStatus extends grpc.UntypedServiceImplementation {
    /**
     * @generated from protobuf rpc: WorkerStatus(stream org.apache.beam.model.fn_execution.v1.WorkerStatusResponse) returns (stream org.apache.beam.model.fn_execution.v1.WorkerStatusRequest);
     */
    workerStatus: grpc.handleBidiStreamingCall<WorkerStatusResponse, WorkerStatusRequest>;
}
/**
 * @grpc/grpc-js definition for the protobuf service org.apache.beam.model.fn_execution.v1.BeamFnWorkerStatus.
 *
 * Usage: Implement the interface IBeamFnWorkerStatus and add to a grpc server.
 *
 * ```typescript
 * const server = new grpc.Server();
 * const service: IBeamFnWorkerStatus = ...
 * server.addService(beamFnWorkerStatusDefinition, service);
 * ```
 */
export const beamFnWorkerStatusDefinition: grpc.ServiceDefinition<IBeamFnWorkerStatus> = {
    workerStatus: {
        path: "/org.apache.beam.model.fn_execution.v1.BeamFnWorkerStatus/WorkerStatus",
        originalName: "WorkerStatus",
        requestStream: true,
        responseStream: true,
        responseDeserialize: bytes => WorkerStatusRequest.fromBinary(bytes),
        requestDeserialize: bytes => WorkerStatusResponse.fromBinary(bytes),
        responseSerialize: value => Buffer.from(WorkerStatusRequest.toBinary(value)),
        requestSerialize: value => Buffer.from(WorkerStatusResponse.toBinary(value))
    }
};
