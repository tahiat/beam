###############################################################################
#  Licensed to the Apache Software Foundation (ASF) under one
#  or more contributor license agreements.  See the NOTICE file
#  distributed with this work for additional information
#  regarding copyright ownership.  The ASF licenses this file
#  to you under the Apache License, Version 2.0 (the
#  "License"); you may not use this file except in compliance
#  with the License.  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
# limitations under the License.
###############################################################################

FROM debian:bookworm
LABEL Author "Apache Beam <dev@beam.apache.org>"

ARG TARGETOS
ARG TARGETARCH

ARG pull_licenses

RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y \
        ca-certificates \
        && \
    rm -rf /var/lib/apt/lists/*

ADD target/${TARGETOS}_${TARGETARCH}/boot /opt/apache/beam/

COPY target/LICENSE /opt/apache/beam/
COPY target/NOTICE /opt/apache/beam/

# Add Go licenses.
COPY target/go-licenses/* /opt/apache/beam/third_party_licenses/golang/
RUN if [ "$pull_licenses" = "false" ] ; then \
    # Remove above golang license and dir if pull licenses false
    rm -rf /opt/apache/beam/third_party_licenses ; \
   fi

ENTRYPOINT ["/opt/apache/beam/boot"]
