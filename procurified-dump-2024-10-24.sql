--
-- PostgreSQL database dump
--

-- Dumped from database version 17.0 (Debian 17.0-1.pgdg120+1)
-- Dumped by pg_dump version 17.0 (Debian 17.0-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: app_user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.app_user (
    id integer NOT NULL,
    first_name character varying(255) NOT NULL,
    surname character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password_hash character varying(255) NOT NULL,
    password_salt character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.app_user OWNER TO postgres;

--
-- Name: app_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.app_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.app_user_id_seq OWNER TO postgres;

--
-- Name: app_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.app_user_id_seq OWNED BY public.app_user.id;


--
-- Name: swapi_request; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.swapi_request (
    id integer NOT NULL,
    query character varying(255) NOT NULL,
    response json NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    last_updated timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.swapi_request OWNER TO postgres;

--
-- Name: swapi_request_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.swapi_request_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.swapi_request_id_seq OWNER TO postgres;

--
-- Name: swapi_request_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.swapi_request_id_seq OWNED BY public.swapi_request.id;


--
-- Name: app_user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.app_user ALTER COLUMN id SET DEFAULT nextval('public.app_user_id_seq'::regclass);


--
-- Name: swapi_request id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.swapi_request ALTER COLUMN id SET DEFAULT nextval('public.swapi_request_id_seq'::regclass);


--
-- Data for Name: app_user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.app_user (id, first_name, surname, email, password_hash, password_salt, created_at) FROM stdin;
3	Peter	Pumpkin Eater	peter@pumpkin.eater	897f0c894e9034c84f3f990eda59428d15566bec4c15f3c88ff7b88db7299ad5	971d027fab554f63db9b80e9cccf2e11	2024-10-26 13:55:42.059387
4	Peter	Pumpkin Eater	peter@pumpkin.eaters	ef667e5ac1d55f21cbf92d73114abe22415d1519b9ae14b0927096736f394af8	b3a0fc309fef18454aac872082f526ea	2024-10-26 16:36:32.16019
5	a	a	francoislaubscher@hotmail.com	9a9f67f26f78782171e4d270379b9b0c119ca54a15a69bba22a3a43a441aef74	1aa6a31eee7352f23c9281d081bc8405	2024-10-27 05:03:07.786983
6	francois	laubscher	francois@email.com	4408e970598befbcbcfbe2ec26b71c35b98fd79fb0a2365c74131a5ad0e6cb21	c4e692f50dcdc500ad3bf76faac0e1ce	2024-10-27 05:26:37.530383
\.


--
-- Data for Name: swapi_request; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.swapi_request (id, query, response, created_at, last_updated) FROM stdin;
2	pal	[{"name":"Palpatine","height":"170","mass":"75","hair_color":"grey","skin_color":"pale","eye_color":"yellow","birth_year":"82BBY","gender":"male","homeworld":"https://swapi.dev/api/planets/8/","films":["https://swapi.dev/api/films/2/","https://swapi.dev/api/films/3/","https://swapi.dev/api/films/4/","https://swapi.dev/api/films/5/","https://swapi.dev/api/films/6/"],"species":[],"vehicles":[],"starships":[],"created":"2014-12-15T12:48:05.971000Z","edited":"2014-12-20T21:17:50.347000Z","url":"https://swapi.dev/api/people/21/"},{"name":"Roos Tarpals","height":"224","mass":"82","hair_color":"none","skin_color":"grey","eye_color":"orange","birth_year":"unknown","gender":"male","homeworld":"https://swapi.dev/api/planets/8/","films":["https://swapi.dev/api/films/4/"],"species":["https://swapi.dev/api/species/12/"],"vehicles":[],"starships":[],"created":"2014-12-19T17:32:56.741000Z","edited":"2014-12-20T21:17:50.385000Z","url":"https://swapi.dev/api/people/37/"}]	2024-10-26 13:58:08.634051	2024-10-26 13:58:08.634051
3	pala	[]	2024-10-26 13:58:45.243746	2024-10-26 13:58:45.243746
4	palak	[]	2024-10-26 14:02:01.384304	2024-10-26 14:02:01.384304
\.


--
-- Name: app_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.app_user_id_seq', 6, true);


--
-- Name: swapi_request_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.swapi_request_id_seq', 4, true);


--
-- Name: app_user app_user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.app_user
    ADD CONSTRAINT app_user_pkey PRIMARY KEY (id);


--
-- Name: swapi_request swapi_request_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.swapi_request
    ADD CONSTRAINT swapi_request_pkey PRIMARY KEY (id);


--
-- Name: ix_app_user_email; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_app_user_email ON public.app_user USING btree (email);


--
-- Name: ix_swapu_request_query; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_swapu_request_query ON public.swapi_request USING btree (query);


--
-- PostgreSQL database dump complete
--

